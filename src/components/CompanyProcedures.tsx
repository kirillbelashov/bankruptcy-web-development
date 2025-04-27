
interface ProceduresProps {
  procedures: Array<{
    title: string;
    description: string;
  }>;
}

const CompanyProcedures = ({ procedures }: ProceduresProps) => {
  return (
    <div className="bg-muted p-8 rounded-xl">
      <h3 className="text-xl font-medium mb-6">Процедуры банкротства юрлиц</h3>
      <ul className="space-y-6">
        {procedures.map((procedure, index) => (
          <li key={index} className="flex">
            <div className="flex-none w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 font-bold">
              {index + 1}
            </div>
            <div>
              <h4 className="font-medium mb-1">{procedure.title}</h4>
              <p className="text-sm text-muted-foreground">{procedure.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyProcedures;
