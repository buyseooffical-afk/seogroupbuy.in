import { Zap, Shield, Clock, Headphones, Globe, Lock } from "lucide-react";

const features = [
  {
    title: "Instant Access",
    description: "Get immediate access to all tools right after your purchase. No waiting time.",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    title: "99.9% Uptime",
    description: "Our proprietary cloud infrastructure ensures your tools are always available when you need them.",
    icon: Shield,
    color: "text-blue-500"
  },
  {
    title: "24/7 Live Support",
    description: "Our dedicated support team is available around the clock to help you with any technical issues.",
    icon: Headphones,
    color: "text-purple-500"
  },
  {
    title: "Secure Browsing",
    description: "We use advanced encryption and secure extensions to protect your data and privacy.",
    icon: Lock,
    color: "text-green-500"
  },
  {
    title: "Global Access",
    description: "Access your tools from anywhere in the world with our high-speed global servers.",
    icon: Globe,
    color: "text-indigo-500"
  },
  {
    title: "Regular Updates",
    description: "We constantly update our tool list and infrastructure to provide the best experience.",
    icon: Clock,
    color: "text-red-500"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-6">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-display">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
