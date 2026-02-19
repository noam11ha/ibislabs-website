"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    c: number;
    d: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How often do you typically have a bowel movement?",
    options: [
      { label: "Less than 3 times per week", c: 3, d: 0 },
      { label: "3–6 times per week", c: 0, d: 0 },
      { label: "1–3 times per day", c: 0, d: 0 },
      { label: "More than 3 times per day", c: 0, d: 3 },
    ],
  },
  {
    id: 2,
    question: "How would you describe your stool consistency most of the time?",
    options: [
      { label: "Hard, lumpy, or pellet-like", c: 3, d: 0 },
      { label: "Normal, well-formed", c: 0, d: 0 },
      { label: "Soft, mushy, or loose", c: 0, d: 2 },
      { label: "Liquid or watery", c: 0, d: 3 },
    ],
  },
  {
    id: 3,
    question: "Do you experience straining or urgency during bowel movements?",
    options: [
      { label: "Mostly straining — hard to go", c: 3, d: 0 },
      { label: "Mostly urgency — sudden need to rush", c: 0, d: 3 },
      { label: "Both straining and urgency at different times", c: 2, d: 2 },
      { label: "Neither, my bowel movements feel normal", c: 0, d: 0 },
    ],
  },
  {
    id: 4,
    question: "How often do you feel bloated or distended?",
    options: [
      { label: "Rarely or never", c: 0, d: 0 },
      { label: "A few times a month", c: 1, d: 0 },
      { label: "Several times a week", c: 2, d: 1 },
      { label: "Almost every day", c: 2, d: 2 },
    ],
  },
  {
    id: 5,
    question: "Where does your abdominal pain or discomfort usually improve?",
    options: [
      { label: "After a bowel movement", c: 0, d: 0 },
      { label: "After eating certain foods", c: 0, d: 1 },
      { label: "It rarely improves", c: 1, d: 1 },
      { label: "I don't experience abdominal pain", c: 0, d: 0 },
    ],
  },
  {
    id: 6,
    question: "How do your bowel symptoms vary over time?",
    options: [
      { label: "Consistently constipated — rarely diarrhea", c: 3, d: 0 },
      { label: "Consistently loose — rarely constipated", c: 0, d: 3 },
      { label: "Alternates between constipation and diarrhea", c: 2, d: 2 },
      { label: "Completely unpredictable with no clear pattern", c: 1, d: 1 },
    ],
  },
  {
    id: 7,
    question: "How long have you been experiencing these symptoms?",
    options: [
      { label: "Less than 3 months", c: 0, d: 0 },
      { label: "3–6 months", c: 1, d: 1 },
      { label: "6 months to 2 years", c: 1, d: 1 },
      { label: "More than 2 years", c: 2, d: 2 },
    ],
  },
  {
    id: 8,
    question: "How much do your digestive symptoms affect your daily life?",
    options: [
      { label: "Mildly — mostly a nuisance", c: 0, d: 0 },
      { label: "Moderately — limits some activities", c: 1, d: 1 },
      { label: "Significantly — affects work or social life", c: 2, d: 2 },
      { label: "Severely — very limiting day-to-day", c: 3, d: 3 },
    ],
  },
];

type IBSType = "IBS-C" | "IBS-D" | "IBS-M" | "IBS-U";

interface ResultConfig {
  type: IBSType;
  emoji: string;
  tagline: string;
  description: string;
  accentColor: string;
  borderColor: string;
  tips: string[];
}

const results: Record<IBSType, ResultConfig> = {
  "IBS-C": {
    type: "IBS-C",
    emoji: "🟤",
    tagline: "Constipation-Predominant IBS",
    description:
      "Your answers suggest you may have IBS-C, the constipation subtype. This means your gut moves more slowly than usual, leading to infrequent, hard, or difficult-to-pass stools along with bloating and discomfort.",
    accentColor: "#F59E0B",
    borderColor: "rgba(245,158,11,0.3)",
    tips: [
      "Increase soluble fiber intake (psyllium, oats, flaxseed)",
      "Stay well-hydrated — aim for 8–10 glasses of water daily",
      "Try the low-FODMAP diet to reduce bloating",
      "Gentle daily exercise can improve gut motility",
      "Ask your doctor about FDA-approved treatments like linaclotide",
    ],
  },
  "IBS-D": {
    type: "IBS-D",
    emoji: "💧",
    tagline: "Diarrhea-Predominant IBS",
    description:
      "Your answers suggest you may have IBS-D, the diarrhea subtype. This means your gut moves faster than it should, causing frequent, loose, or urgent bowel movements — often with significant cramping.",
    accentColor: "#00D4FF",
    borderColor: "rgba(0,212,255,0.3)",
    tips: [
      "Follow a low-FODMAP diet to identify food triggers",
      "Avoid caffeine, alcohol, and high-fat meals",
      "Soluble fiber (not insoluble) can help firm up stools",
      "Practice stress management — IBS-D is highly stress-sensitive",
      "Ask your doctor about rifaximin or eluxadoline",
    ],
  },
  "IBS-M": {
    type: "IBS-M",
    emoji: "🔄",
    tagline: "Mixed IBS (Alternating)",
    description:
      "Your answers suggest you may have IBS-M, the mixed subtype. You experience both constipation and diarrhea — often alternating unpredictably. This is often the most challenging subtype to manage, but the right approach can bring real relief.",
    accentColor: "#A78BFA",
    borderColor: "rgba(167,139,250,0.3)",
    tips: [
      "Track symptoms in detail to spot your personal patterns",
      "The low-FODMAP diet works well for IBS-M",
      "Gut-directed CBT and hypnotherapy have strong evidence",
      "Peppermint oil (enteric-coated) can ease overall symptoms",
      "Work with a GI specialist who understands IBS-M",
    ],
  },
  "IBS-U": {
    type: "IBS-U",
    emoji: "❓",
    tagline: "Unclassified IBS",
    description:
      "Your answers suggest IBS-U — unclassified IBS. Your symptoms don't fit neatly into one subtype, which is common. You may need more time tracking your symptoms, or your pattern may emerge more clearly with monitoring.",
    accentColor: "#94A3B8",
    borderColor: "rgba(148,163,184,0.3)",
    tips: [
      "Keep a detailed food and symptom diary for 2–4 weeks",
      "Track your stool using the Bristol Stool Scale",
      "Start with general IBS lifestyle recommendations",
      "Consider seeing a GI specialist for further assessment",
      "Stress management and sleep are foundational for all IBS types",
    ],
  },
};

function calculateResult(answers: number[][]): IBSType {
  let totalC = 0;
  let totalD = 0;
  answers.forEach((answer, qIdx) => {
    answer.forEach((optIdx) => {
      totalC += questions[qIdx].options[optIdx].c;
      totalD += questions[qIdx].options[optIdx].d;
    });
  });
  const diff = totalC - totalD;
  const total = totalC + totalD;
  if (total < 4) return "IBS-U";
  if (diff >= 5) return "IBS-C";
  if (diff <= -5) return "IBS-D";
  if (totalC >= 4 && totalD >= 4) return "IBS-M";
  return "IBS-U";
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[][]>(Array(questions.length).fill([]));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<IBSType | null>(null);
  const [started, setStarted] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleSelect = (optionIdx: number) => setSelectedOption(optionIdx);

  const handleNext = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = [selectedOption];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setResult(calculateResult(newAnswers));
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]?.[0] ?? null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill([]));
    setSelectedOption(null);
    setResult(null);
    setStarted(false);
  };

  // ── Intro screen ───────────────────────────────────────────────
  if (!started) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/[0.06] border border-white/10 mb-8 text-3xl">
          🧠
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Free IBS Type Quiz
        </h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
          Answer 8 questions about your symptoms to discover which IBS subtype
          you may have — and what to do about it.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(["IBS-C", "IBS-D", "IBS-M", "IBS-U"] as IBSType[]).map((t) => (
            <span
              key={t}
              className="px-4 py-1.5 rounded-md text-xs font-black uppercase tracking-widest border"
              style={{
                color: results[t].accentColor,
                borderColor: results[t].borderColor,
                background: results[t].borderColor.replace("0.3", "0.08"),
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500 mb-12">
          {[
            { label: "Takes ~3 minutes" },
            { label: "100% private" },
            { label: "Instant results" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
              {item.label}
            </span>
          ))}
        </div>

        <button
          onClick={() => setStarted(true)}
          className="bg-[#00D4FF] text-[#0A0A0F] px-10 py-4 rounded-md font-black text-base hover:bg-[#00BFEB] active:scale-[0.99] transition-all glow-accent tracking-tight"
        >
          Start the Quiz →
        </button>
        <p className="mt-5 text-xs text-zinc-600">
          Not a medical diagnosis. Always consult your doctor.
        </p>
      </div>
    );
  }

  // ── Results screen ─────────────────────────────────────────────
  if (result) {
    const config = results[result];
    return (
      <div className="max-w-2xl mx-auto">
        {/* Result card */}
        <div
          className="rounded-lg border p-8 mb-5 text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderColor: config.borderColor,
          }}
        >
          <div className="text-4xl mb-4">{config.emoji}</div>
          <div
            className="inline-block px-3.5 py-1 rounded-md text-xs font-black uppercase tracking-widest border mb-4"
            style={{ color: config.accentColor, borderColor: config.borderColor, background: config.borderColor.replace("0.3", "0.1") }}
          >
            {config.type}
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3">
            {config.tagline}
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto text-sm">
            {config.description}
          </p>
        </div>

        {/* Tips */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-lg p-7 mb-5">
          <h3 className="font-black text-white tracking-tight mb-5 text-base uppercase tracking-widest text-xs" style={{ color: config.accentColor }}>
            What to do next
          </h3>
          <ul className="space-y-4">
            {config.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                <span
                  className="mt-0.5 w-5 h-5 rounded-md text-[10px] flex items-center justify-center font-black flex-shrink-0"
                  style={{ background: config.borderColor.replace("0.3", "0.15"), color: config.accentColor }}
                >
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className="rounded-lg p-7 text-center border"
          style={{ background: "#0A0A0F", borderColor: "rgba(0,212,255,0.2)", boxShadow: "0 0 40px rgba(0,212,255,0.06)" }}
        >
          <h3 className="font-black text-white tracking-tight text-lg mb-2">
            Get personalized {result} guidance
          </h3>
          <p className="text-zinc-400 text-sm mb-6">
            IbisLabs is building an AI-powered app to help you track triggers,
            personalize your diet, and find lasting relief.
          </p>
          <Link
            href="/waitlist"
            className="inline-block bg-[#00D4FF] text-[#0A0A0F] px-8 py-3 rounded-md font-black text-sm hover:bg-[#00BFEB] transition-colors glow-accent-sm"
          >
            Join the Waitlist — Free
          </Link>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleRestart}
            className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors underline underline-offset-4"
          >
            Retake the quiz
          </button>
        </div>
      </div>
    );
  }

  // ── Question screen ────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-zinc-600 font-medium uppercase tracking-wider">
            Question {currentQuestion + 1} / {questions.length}
          </span>
          <span className="text-xs font-bold" style={{ color: "#00D4FF" }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: "#00D4FF" }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-8">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3 mb-10">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className="w-full text-left px-5 py-4 rounded-md border font-medium text-sm transition-all"
            style={
              selectedOption === idx
                ? {
                    borderColor: "rgba(0,212,255,0.6)",
                    background: "rgba(0,212,255,0.08)",
                    color: "#00D4FF",
                  }
                : {
                    borderColor: "rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#a1a1aa",
                  }
            }
          >
            <span className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded-sm border flex-shrink-0 flex items-center justify-center transition-colors"
                style={
                  selectedOption === idx
                    ? { borderColor: "#00D4FF", background: "#00D4FF" }
                    : { borderColor: "rgba(255,255,255,0.15)" }
                }
              >
                {selectedOption === idx && (
                  <svg className="w-2.5 h-2.5 text-[#0A0A0F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
              {option.label}
            </span>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="flex items-center gap-2 text-zinc-600 hover:text-zinc-300 disabled:opacity-25 disabled:cursor-not-allowed transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className="bg-[#00D4FF] text-[#0A0A0F] px-8 py-3 rounded-md font-black text-sm hover:bg-[#00BFEB] active:scale-[0.99] transition-all disabled:opacity-25 disabled:cursor-not-allowed flex items-center gap-2 tracking-tight"
        >
          {currentQuestion === questions.length - 1 ? "See my results" : "Next question"}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
