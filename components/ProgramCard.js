export default function ProgramCard({ title, description }) {
  return (
    <div className='bg-white shadow-md rounded p-4'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
