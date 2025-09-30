// components/Manifesto.tsx

import {
  Award,
  Users2,
  Globe2,
  Banknote,
  Heart,
  PiggyBank,
  GraduationCap,
  Building2,
  ShieldCheck,
  Vote,
  CheckCircle2,
} from "lucide-react";

// Manifesto types
interface ManifestoDescription {
  intro?: string;
  bullets?: string[];
}

interface ManifestoPoint {
  icon: React.ElementType;
  title: string;
  description: ManifestoDescription;
  impact: string;
  color: string;
  iconBg: string;
  cardBg: string;
  border: string;
}

const manifestoPoints: ManifestoPoint[] = [
  {
    icon: Users2,
    title: "Transparent & Inclusive Welfare Committee",
    description: {
      intro: "Formation of an effective welfare committee from every sub-county elected reps to ensure accountability of BBF funds and easy access ",
      bullets: [
        "1 rep per sub-county",
        "Oversight role of BBF funds to ensure accountability ",
        "Digital platform for real time BBF claims",
      ],
    },
    impact: "All EMC subcounties represented",
    color: "text-accent-foreground",
    iconBg: "bg-accent/80",
    cardBg: "bg-gradient-to-br from-accent/10 via-white to-accent/5",
    border: "border-accent",
  },
  {
    icon: Heart,
    title: "EFFECTIVE MEDICAL INSURANCE ",
    description: {
      intro: "Comprehensive medical access to medical services with no delays, limits or rejection",
      bullets: [
        "Addition of more hospital facilities within our county and nearby county especially within the Eldoret city ",
        "Inclusion of wider range of services such as mental health, long-term illnesses, emergencies among others ",
      ],
    },
    impact: "No more suffering",
    color: "text-secondary-foreground",
    iconBg: "bg-secondary/80",
    cardBg: "bg-gradient-to-br from-secondary/10 via-white to-secondary/5",
    border: "border-secondary",
  },
  {
    icon: Banknote,
    title: " SUSTAINABLE ASSET GROWTH AND INVESTMENTS ",
    description: {
      intro: "Widen asset investment options for more lasting and sustainable value for member’s contributions",
      bullets: [
        " Clear reports on investment costs",
        "Proper sustainability assessment of investment options ",
        "Independent accounts for revenues generated ",
      ],
    },
    impact: "Long-term financial sustainability",
    color: "text-primary",
    iconBg: "bg-primary/80",
    cardBg: "bg-gradient-to-br from-primary/5 via-white to-primary/10",
    border: "border-primary",
  },
  
  {
    icon: GraduationCap,
    title: "JUNIOR SECONDARY SCHOOL AUTONOMY",
    description: {
      intro: "JS to be recognized as autonomous institution with independent management separate from primary schools ",
      bullets: [
        "Full autonomy for JS ",
        "Distinct boards ",
        "Adequate staffing & funding ",
      ],
    },
    impact: "Conducive JS environment",
    color: "text-secondary-foreground",
    iconBg: "bg-secondary/90",
    cardBg: "bg-gradient-to-br from-secondary/10 via-white to-secondary/5",
    border: "border-secondary",
  },
  {
    icon: Award,
    title: "PROACTIVE APPROACH TO POLICY CHANGES ",
    description: {
      intro: "To be at the forefront of influencing policies before they are implemented rather than reactive.",
      bullets: [
        "Improve teachers working conditions ",
        "Terminal leaves to usher the senior citizenship stage",
      ],
    },
    impact: "Teacher-centered policies",
    color: "text-primary",
    iconBg: "bg-primary/90",
    cardBg: "bg-gradient-to-br from-primary/5 via-white to-primary/10",
    border: "border-primary",
  },
];

const customStyles = `
@keyframes manifesto-float {
  0% { transform: translateY(0px);}
  50% { transform: translateY(-8px);}
  100% { transform: translateY(0px);}
}
.manifesto-animate-float {
  animation: manifesto-float 2.5s ease-in-out infinite;
}
@keyframes manifesto-fade-in {
  0% { opacity: 0;}
  100% { opacity: 1;}
}
.manifesto-animate-fade-in {
  animation: manifesto-fade-in 1.2s ease-in;
}
@keyframes card-pop {
  0% { transform: scale(0.95);}
  60% { transform: scale(1.03);}
  100% { transform: scale(1);}
}
.manifesto-card-pop {
  animation: card-pop 0.8s cubic-bezier(.17,.67,.83,.67);
}
`;

export const Manifesto = () => {
  return (
    <>
      <style>{customStyles}</style>
      <section
        id="manifesto"
        className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* --- Manifesto Section Heading --- */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 manifesto-animate-fade-in drop-shadow-lg">
              My 5-Point Manifesto for Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 manifesto-animate-fade-in">
              Comprehensive reforms that will revolutionize teacher welfare and financial management in Elgeyo Marakwet County
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary font-semibold manifesto-animate-float">
              <CheckCircle2 className="h-5 w-5" />
              <span>Practical Solutions</span>
              <span className="mx-2">•</span>
              <CheckCircle2 className="h-5 w-5" />
              <span>Financially Sustainable</span>
              <span className="mx-2">•</span>
              <CheckCircle2 className="h-5 w-5" />
              <span>Teacher-Centered</span>
            </div>
          </div>

          {/* --- Manifesto Cards --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {manifestoPoints.map((point, index) => (
              <div
                key={index}
                className={`rounded-xl p-7 shadow-lg border-2 ${point.border} hover:shadow-xl transition-all duration-300 hover:scale-[1.03] ${point.cardBg} backdrop-blur-sm manifesto-animate-fade-in manifesto-card-pop`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${point.iconBg} flex-shrink-0 shadow-md manifesto-animate-float border-2 border-white`}>
                    <point.icon className={`h-8 w-8 ${point.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 drop-shadow-sm text-gray-900">{point.title}</h3>
                    {point.description.intro && (
                      <p className="text-gray-700 leading-relaxed mb-2">
                        {point.description.intro}
                      </p>
                    )}
                    {point.description.bullets && point.description.bullets.length > 0 && (
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-3">
                        {point.description.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-sm">
                      {point.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- Manifesto Footer Cards --- */}
          <div className="mt-10 space-y-10">
            {/* Why This Manifesto Matters */}
            <div className="bg-gradient-to-r from-primary/10 via-white to-accent/10 p-10 rounded-xl max-w-4xl mx-auto text-center shadow-xl manifesto-animate-float border-2 border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-primary">Why This Manifesto Matters</h3>
              <p className="text-xl mb-6 text-gray-700">
                These aren't just promises – they're commitments backed by experience, expertise, and a proven track record.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2 text-primary">4,000+</div>
                  <div className="text-gray-700">Teachers to benefit across Elgeyo Marakwet County</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-primary">4+</div>
                  <div className="text-gray-700">Elgeyo Marakwet Sub-counties covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-primary">10+</div>
                  <div className="text-gray-700">Years experience</div>
                </div>
              </div>
            </div>

            {/* Commitment Card */}
            <div className="bg-gradient-to-r from-secondary/10 via-white to-primary/10 p-10 rounded-xl border-2 border-primary/20 shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">My Commitment to You</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Transparency Guarantee:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Open-door policy for member inquiries</li>
                    <li>• Transparent Decision-Making</li>
                    <li>• Inclusive representation</li>

                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Accountability Measures:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Monthly Progress Updates on All Initiatives</li>
                    <li>• Regular Audits and Reports</li>
                    <li>• Direct Member Feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ready to Transform Card */}
            <div className="text-center">
              <div
                className="bg-gradient-to-r from-accent/10 via-white to-primary/10 p-8 rounded-xl max-w-2xl mx-auto
                 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl shadow-lg manifesto-animate-float border-2 border-primary/30"
              >
                <h4 className="text-xl font-bold mb-3 text-primary">Ready for Transformation?</h4>
                <p className="mb-4 flex items-center justify-center text-xl font-bold text-primary">
                  <Vote className="h-10 w-10 mr-3 text-primary" />
                  Vote Kailong Kipsang Edwin for <br/>Assistant Executive Secretary <br/>
                  <br/>
                   – Elgeyo Marakwet County 
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  "Together, we will build a KUPPET that truly serves its members with dignity, transparency, and excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
