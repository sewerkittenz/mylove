import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flower, MailOpen, Sparkles } from "lucide-react";

const messages = [
  "It’s been a while.",
  "I didn’t expect silence to feel this loud.",
  "We stopped talking. But I never stopped caring.",
  "I don’t want to force anything. I just miss what we had.",
  "Remember when we’d joke about [your inside joke here]? Still makes me laugh.",
  "I won’t crowd your space. But I’m here. Always.",
  "If you ever want to talk again… you know where to find me. And I’d really like it if you did."
];

export default function ReconnectISTP() {
  useEffect(() => {
    document.title = "For You - Just Clicked In My Mind 💭";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full grid gap-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          This is for you.
        </motion.h1>

        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Sparkles className="text-pink-400 animate-pulse" size={40} />
        </motion.div>

        <div className="grid gap-4 mt-10">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className="text-xl md:text-2xl text-zinc-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 1.2 + 1.5, duration: 0.8 }}
            >
              {msg}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: messages.length * 1.2 + 1, duration: 1 }}
        >
          <Card className="bg-zinc-800/40 backdrop-blur-md border border-zinc-700 rounded-2xl shadow-2xl">
            <CardContent className="p-8">
              <div className="text-zinc-200 text-lg mb-4">
                You’ve always inspired me. Your mind, your energy—something about you just *clicked* in my head and never left.
              </div>
              <Button variant="secondary" className="rounded-full flex gap-2">
                <MailOpen size={20} /> Message me, if you want.
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="absolute bottom-6 right-6 animate-spin-slow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 2, duration: 2 }}
        >
          <Flower size={48} className="text-fuchsia-300" />
        </motion.div>
      </div>
    </main>
  );
}
