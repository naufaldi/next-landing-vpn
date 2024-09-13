import Layout from "../components/Layout/Layout";

function SubmissionComingSoon() {
  return (
    <Layout>
      <div className="max-w-screen-xl h-screen px-8 md:py-14 xl:px-16 mx-auto flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">Submission Coming Soon</h1>
        <p className="text-lg mt-4">
          Stay tuned for more information on how to submit your research.
        </p>
        <a href="/" className="mt-4">
          <button className="border py-3 px-6 rounded-md hover:bg-orange-500 hover:text-white-300">
            Back to home
          </button>
        </a>
      </div>
    </Layout>
  );
}

export default SubmissionComingSoon;
