import React from 'react';
import s2 from './images/s2.jpg'

function About() {
  return (
    <section className="about my-4">
<div className="container ">
    <div className="text-center">
        <h1>About <span className="text-primary">Q-DITS</span></h1>
        <hr className="w-25 m-auto"/>
    </div>
    <div className="row mt-3">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <h1>Explore more <span className="text-primary">to know about Q-DITS</span> </h1>
            <p className="p-2"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, inventore molestiae. Pariatur maiores consequuntur laudantium. Repellendus quis laudantium dolore ullam!</p>
            <button type="button" className="btn btn-light">Explore</button>

            <div className="accordion mt-4" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Market Caps
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Quant
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden showing and hiding via CSS transitions, CSS default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    National Stock Exchange
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, 
                </div>
              </div>
            </div>

          

</div>
</div>


        <div className="col-sm-12 col-md-6 col-lg-6 col-12 text-end m-auto">
<img src={s2} className="img-fluid img-thumbnail"/>
        </div>
    </div>
</div>
</section>
  )
}

export default About
