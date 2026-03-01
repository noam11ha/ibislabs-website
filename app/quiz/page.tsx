import type { Metadata } from "next";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: "IBS Type Quiz — Discover Your IBS Subtype",
  description:
    "Take our free IBS type quiz to find out if you have IBS-C, IBS-D, IBS-M, or IBS-U. 8 questions, instant results, and personalized management tips.",
  keywords: [
    "IBS quiz",
    "IBS type test",
    "do I have IBS",
    "IBS-C IBS-D quiz",
    "types of IBS quiz",
    "IBS symptoms quiz",
  ],
};

export default function QuizPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Quiz />
      </div>
    </div>
  );
}
