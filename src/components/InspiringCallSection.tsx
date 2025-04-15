
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const InspiringCallSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-figo-purple to-figo-purple/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block w-12 h-12 rounded-full bg-figo-green/20 flex items-center justify-center">
              <span className="inline-block w-8 h-8 rounded-full bg-figo-green"></span>
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
            "Assim como o figo simboliza a fertilidade que floresce da terra, a Figo nasce para cultivar o sucesso dos varejistas, nutrindo sonhos e transformando desafios em prosperidade."
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium min-w-[180px]">
              Comece agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 min-w-[180px]">
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
