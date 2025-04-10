import { Card, CardContent } from "@/components/ui-custom/card"

type SkillCardProps = {
  title: string;
  skills: skills[];
  icons: Record<string, React.ElementType>;
  language: string;
  areTools?: boolean;
};

type skills = {
  name: string;
  nameEn: string;
  icon: string;
};
export function SkillCard({ title, skills, icons, language, areTools = false }: SkillCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
        <div className={`grid ${areTools ? "grid-cols-5" : "grid-cols-3"} gap-6`}>
          {skills.map((skill, index) => {
            const Icon = icons[skill.icon as keyof typeof icons];
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-3 bg-gray-200 dark:bg-gray-800 p-4 rounded-full">
                  {Icon ? (
                    <Icon size={50} className="text-black dark:text-white" />
                  ) : (
                    <div className="w-[50px] h-[50px] bg-gray-300 dark:bg-gray-700 rounded-full" />
                  )}
                </div>
                <h4 className="font-medium mb-1">{language === "es" ? skill.name : skill.nameEn}</h4>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
