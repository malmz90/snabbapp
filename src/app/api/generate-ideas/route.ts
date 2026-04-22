import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface GenerateBody {
  industry: string;
  audience: string;
  problem: string;
  platform: string;
  monetization: string;
  complexity: string;
}

export async function POST(req: NextRequest) {
  let body: GenerateBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ogiltigt format." }, { status: 400 });
  }

  const { industry, audience, problem, platform, monetization, complexity } = body;

  if (!industry || !audience?.trim() || !problem?.trim() || !platform || !monetization || !complexity) {
    return NextResponse.json({ error: "Alla fält krävs." }, { status: 400 });
  }

  const userPrompt = `Generera 5 realistiska MVP-klara app-idéer baserat på:

Bransch: ${industry}
Målgrupp: ${audience}
Problem att lösa: ${problem}
Plattform: ${platform}
Intäktsmodell: ${monetization}
Komplexitetsnivå: ${complexity}

Varje idé måste innehålla:
- Appnamn
- Kort beskrivning
- Kärnfunktioner (3–5 punkter)
- Varför det kan fungera
- MVP-scope (mycket kort)

Svara ENBART med giltig JSON i detta exakta format (utan kodblock eller förklaringar):
[
  {
    "name": "Appnamn",
    "description": "Kort beskrivning",
    "features": ["Funktion 1", "Funktion 2", "Funktion 3"],
    "why_it_works": "Förklaring varför idén är stark",
    "mvp_scope": "Vad som ingår i MVP"
  }
]

Alla svar ska vara på svenska.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "Du är en startup-produktstrateg som genererar realistiska, praktiska och byggbara MVP app-idéer. Svara alltid på svenska med ren JSON utan markdown-kodblock.",
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.85,
      max_tokens: 3000,
    });

    const text = response.choices[0]?.message?.content ?? "";

    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.error("No JSON array found in response:", text);
      throw new Error("Oväntat svar från AI:n.");
    }

    const ideas = JSON.parse(jsonMatch[0]);

    if (!Array.isArray(ideas) || ideas.length === 0) {
      throw new Error("Inga idéer genererades.");
    }

    return NextResponse.json(ideas);
  } catch (err) {
    console.error("Generate ideas error:", err);
    const message =
      err instanceof Error ? err.message : "Något gick fel. Försök igen.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
