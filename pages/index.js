import Head from "next/head";
import { Card } from "../components/Card";
import { Experience } from "../components/Experience";
import { Layout } from "../components/Layout";
import { Skills } from "../components/Skills";



export default function Home() {
  return (
    <div>
      <Layout>
        <header className="row text-white  border border-dark p-4 bg-dark rounded">
          <div className="col-3 mx-auto border border-ligth bg-dark rounded ">
            <img src="" alt="" />
          </div>
          <div className="col-8">
            <h1 className="display-5 text-white">Franklin Martinez</h1>
            <h4 className="display-5 text-white">Full Stack Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deleniti quos id quod laudantium quam quia quasi reiciendis, eligendi iusto dolorum nesciunt consequatur. Optio dignissimos harum odio, aliquam neque amet.</p>
            <button className="btn btn-outline-light rounded">Hire me</button>
          </div>
        </header>

        <section className="row mt-2 d-flex justify-content-between">
          <div className="col-4 border border-dark p-4 rounded">
            <h3 className=" m-0">Skills</h3>
            <hr className="border border-dark mb-4" />

            <Skills skill={'JavaScript'} porcent={'80%'} />
            <Skills skill={'Node Js'} porcent={'40%'} />
            <Skills skill={'React Js'} porcent={'60%'} />
            <Skills skill={'C#'} porcent={'30%'} />
            <Skills skill={'Next js'} porcent={'20%'} />
            <Skills skill={'Firebase'} porcent={'40%'} />
            <Skills skill={'No SQL'} porcent={'50%'} />



          </div>
          <div className="col-7 border border-dark p-4 rounded">
            <h3 className=" m-0">Experience</h3>
            <hr className="border border-dark mb-4" />

            <Experience job={'Software developer at Microsoft'} time={'2000 - 2025'} />
            <Experience job={'Software developer at Microsoft'} time={'2000 - 2025'} />
            <Experience job={'Software developer at Microsoft'} time={'2000 - 2025'} />

            <div className="row">
              <div className="col-12 text-start">
                <p className="m-0 p-0 p-2 font-weight-bold btn btn-dark">Know more</p>
              </div>
            </div>

          </div>

        </section>

        <section className="row">
          <div className="col-12 text-center bg-dark p-4 mt-2 rounded">
            <h3 className="text-white mb-4">Portafolio</h3>
            <div className="row">
              <div className="col-12 ">

                <div className="row d-flex justify-content-around flex-wrap">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
                <button className="btn btn-outline-light my-3">More Projects</button>
              </div>
            </div>

          </div>
        </section>
      </Layout>


    </div>
  );

}
