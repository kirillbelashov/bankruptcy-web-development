
interface StageProps {
  stages: Array<{
    title: string;
    description: string;
  }>;
}

const PhysicalStages = ({ stages }: StageProps) => {
  return (
    <div className="bg-muted p-8 rounded-xl">
      <h3 className="text-xl font-medium mb-6">Этапы банкротства физического лица</h3>
      <ol className="space-y-6">
        {stages.map((stage, index) => (
          <li key={index} className="flex">
            <div className="flex-none w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 font-bold">
              {index + 1}
            </div>
            <div>
              <h4 className="font-medium mb-1">{stage.title}</h4>
              <p className="text-sm text-muted-foreground">{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PhysicalStages;
