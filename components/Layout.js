import Head from 'next/head'

import Header from './Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
   


       
        body {
       
        
        
  
         
        }

     

       
        .content {
          
        
    
          
          
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
          padding-bottom: 40px;
          padding-top: 0px;
          
        }

        footer {
        
      
        
         
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
         
          height: auto;
          padding: 50px;
          padding-left: 20px;
         
        }
        

        footer img {
          
          height: 1rem;
        }
        
      `}</style>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
   
    </>
  )
}
