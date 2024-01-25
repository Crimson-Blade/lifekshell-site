import React, { useEffect } from 'react';

function Testimonials() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-e2b93ce1-a7fb-4704-96e6-1fe0bf4c9974">
      <iframe src='https://e2b93ce1a7fb470496e61fe0bf4c9974.elf.site' width='100%' height='1000' frameborder='0'></iframe>

    </div>
  );
}

export default Testimonials;
