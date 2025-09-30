import { GraduationCap, Award, Heart, MapPin, Briefcase, Users, Shield } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            About Kailong Kipsang Edwin
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            'Leading in inclusion'
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <GraduationCap className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Educational Leadership</h3>
                <p className="text-muted-foreground">
                  An alumnus of Egerton University and Catholic University of Eastern Africa and a teacher of Mathematics and Business Studies at Tambach Boys. A dedicated leader who has served in several leadership roles including head of subject, career master, champion teacher in ESD and Award Leader in Presidents Award program.  Currently, head of games and sports department with passion in coaching and refereeing the game of Rugby and Netball.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Community Building</h3>
                <p className="text-muted-foreground">
                  Extensive experience in match officiating training for Junior and Senior Schools within EMC county and Rift Valley region, coaching and game management Senior school. Active planning of annual school based team building program. High involvement in church activities in the community, and currently a serving treasurer.
                </p>
              </div>
            </div>
      </div>
          <div className="bg-gradient-to-br from-secondary to-accent/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">My Vision</h3>
            <p className="text-card-foreground leading-relaxed mb-6">
              "To transform Kuppet EMC branch into a model excellence in leadership where every teacher feels valued, respected and empowered to contribute to improved teacher welfare, fair remuneration and better pay through grass-root representation channels from school to sub-county that enhance transparency and accountability."
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-card-foreground">Passionate about teacher welfare</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-card-foreground">Committed to transparency</span>
              </div>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <p className="text-muted-foreground italic">
                "I seek this office not for personal gain but to ensure that every teacher in Elgeyo Marakwet is heard, protected and empowered "
              </p>
              <p className="text-sm text-muted-foreground mt-2">- Kailong Kipsang Edwin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
