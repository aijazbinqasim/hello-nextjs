import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  
    const router = useRouter();
    console.log(router.query);

  return (
    <div>
      <h1>The Portfoio Project Page: {router.query.projectid}</h1>
    </div>
  );
}

export default PortfolioProjectPage;
