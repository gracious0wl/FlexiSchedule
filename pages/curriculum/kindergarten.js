import Head from 'next/head';
import ProgramTemplate from '../../components/ProgramTemplate';

export default function Kindergarten() {
  return (
    <>
      <Head>
        <title key="title">Kindergarten Program - FlexiSchedule</title>
        <meta key="description" name="description" content="Explore our Kindergarten curriculum and flexible scheduling options." />
      </Head>
      
      <ProgramTemplate programName="Kindergarten">
        <div className="py-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to Kindergarten</h2>
          <p className="text-gray-600 mb-4">
            Our program focuses on building core academic skills while maintaining a balanced, flexible schedule for elementary students.
          </p>
          {/* Add more curriculum details here */}
        </div>
      </ProgramTemplate>
    </>
  );
}