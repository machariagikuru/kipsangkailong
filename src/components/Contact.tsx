import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Facebook,
  Twitter,
  Users,
  MessageSquare,
  Share2,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Support Kailong Kipsang Edwin For Executive Secretary - Elgeyo Marakwet",
        text: "Read and share the manifesto for a better KUPPET Elgeyo Marakwet.",
        url: "https://www.kipsangkailong.com",
      });
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Let's Unite <br/> Elgeyo Marakwet Teachers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about my manifesto? <br/>Want to support the campaign? <br/>Ready to transform teacher welfare in Elgeyo Marakwet County? <br/>Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact + Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <span className="text-muted-foreground">kipsangkailong@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Phone / WhatsApp</p>
                    <span className="text-muted-foreground">+254 720 470 328</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <span className="text-muted-foreground">Elgeyo Marakwet County, Kenya</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Election Date</p>
                    <span className="text-muted-foreground">February, 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-card-foreground mb-3 flex items-center">
                <MessageSquare className="h-5 w-5 text-primary mr-2" />
                Campaign Updates
              </h4>
              <p className="text-muted-foreground mb-4">
                Stay informed about campaign events, manifesto updates, town halls, and election information.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    window.open(
                      'https://chat.whatsapp.com/L2smgkT5OYoCxn0btO9j2i?"',
                      '_blank',
                      'noopener,noreferrer'
                    );
                  }}
                >
                  Join WhatsApp Group
                </Button>
                <a href="https://chat.whatsapp.com/L2smgkT5OYoCxn0btO9j2i?" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    Follow on Facebook
                  </Button>
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" aria-label="Facebook" className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition">
                <Facebook className="h-6 w-6 text-primary" />
              </a>
              <a href="#" aria-label="Twitter" className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition">
                <Twitter className="h-6 w-6 text-primary" />
              </a>
              <a href="https://api.whatsapp.com/send?text=Support%20Kailong%20Kipsang%20Edwin%20for%20KUPPET%20Assistant%20Secretary%202026%20-%20Read%20his%20Manifesto:%20https://www.kipsangkailong.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <div className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Campaign Support */}
          <div id="support" className="bg-gradient-to-br from-secondary to-accent/40 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Support the Campaign</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2 flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  Volunteer Opportunities
                </h4>
                <p className="text-muted-foreground">
                  Help spread the message across Elgeyo Marakwet County and beyond. Organize rallies, mobilize teachers, and distribute materials.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">School Visits & Town Halls</h4>
                <p className="text-muted-foreground">
                  Attend community meetings and share your ideas to shape a better KUPPET for all.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">Spread the Word</h4>
                <p className="text-muted-foreground">
                  Share our manifesto online, in WhatsApp groups, and with fellow teachers.
                </p>
              </div>

              <div className="bg-card/50 p-4 rounded-lg">
                <h5 className="font-semibold text-card-foreground mb-2">Upcoming Events</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Teacher Forums – Ongoing </li>
                  <li>• Sub-county Rallies – Monthly</li>
                  <li>• School Visits – Ongoing</li>
                  <li>• Voting Day – February 2026</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-card rounded-lg border-l-4 border-primary">
              <p className="text-card-foreground font-medium">
                "Every teacher's voice matters. Every vote counts. Together, we will build a KUPPET that truly serves its members."
              </p>
              <p className="text-muted-foreground text-sm mt-1">– Kailong Kipsang Edwin, Candidate for Assistant Executive Secretary, EMC</p>
            </div>
          </div>
        </div>

        {/* Download & Share Actions */}
        <div className="mt-12 text-center px-4">
          <div className="bg-primary text-primary-foreground p-6 rounded-xl max-w-3xl mx-auto">
            <h4 className="text-xl font-bold mb-2">Ready to Make a Difference?</h4>
            <p className="mb-4">
              Join the movement for transparent, effective teacher welfare management in Elgeyo Marakwet.<br /> Please share the materials below with your contacts.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <a
                href="/Kailong-Kipsang-poster.jpg"
                download
                className="inline-flex"
              >
                <Button
                  size="lg"
                  className="flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Download className="w-5 h-5" />
                  Download poster
                </Button>
              </a>

              <a
                href="https://chat.whatsapp.com/L2smgkT5OYoCxn0btO9j2i?"
                download
                className="inline-flex"
              >
                <Button
                  size="lg"
                  className="flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Download className="w-5 h-5" />
                  Join Us
                </Button>
              </a>

              <Button
                size="lg"
                className="flex items-center gap-2 border border-white text-white hover:bg-white hover:text-primary transition"
                onClick={handleShare}
              >
                <Share2 className="w-5 h-5" />
                Share Website
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
