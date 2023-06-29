import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className='content'>
        <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1'>
                <StaticImage src="../../static/images/tree.jpg" alt="" />
              </div>
            </div>
            <div className='row' style={{ paddingTop: '4%' }}>
              <div className='col-md-10 col-md-offset-1'>
                <h1>Geothermal 101</h1>
                <div role="tabpanel">
                  { /* Nav tabs */ }
                  <ul className="nav nav-pills" role="tablist">
                    <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">The Basics</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">The Benefits</a></li>
                    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">The FAQs</a></li>
                    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">The Lingo</a></li>
                    <li role="presentation"><a href="#resources" aria-controls="settings" role="tab" data-toggle="tab">Resources</a></li>
                  </ul>
                  { /* Tab panes */ } 
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="home">
                      <p>On a sunny day, when the great burning star stands high in the noon sky, its rays come barreling down upon the Earth, thus bringing heat. However, the following day may see the clouds reign in the sky, blocking the sun, its rays, and its heat. The next day may bring the sun out from behind the clouds or may hide it again. Who knows?</p>
                      <p>The point is that the sun’s ability to heat the earth is not constant. It is dependent on other types of weather. If the clouds, the rain, or the wind show up on the scene, the sun’s wonderful heat-giving capacity is ruined. Or is it? The sun radiates an abundant amount of energy to the Earth everyday (even when it is cold outside). Like a giant storage medium, the Earth and its groundwater absorb about half of this precious solar energy. So, even though the weather may be cold or rainy or foggy, the Earth still gathers and stores the sun’s energy.</p>
                      <p>Because it does this, the Earth remains at a constant temperature range (from about 45 degrees F to 70 degrees F in North America). This interesting characteristic has already been recognized and utilized by even the smallest of creatures. The gopher burrows underground to make his home utilizing the Earth’s stable temperature range all year. In the summer, the ground is cooler than the outside air, and in the winter, the ground is warmer than the outside air. The gopher uses this fact to stay comfortable no matter what the weather condition.</p>
                      <p>Humans, too, can utilize this virtually limitless source of energy to heat and cool our homes, businesses, and schools.</p>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="profile">
                      <ul style={ {marginTop: '15px'} }>
                        <li><Link to='/tax-credits'>Tax Credits</Link></li><br />
                        <li>The most energy-efficient, environmentally clean, and cost-effective space conditioning system available, according to the Environmental Protection Agency.</li><br />
                        <li>EPA found that geothermal heat pumps can reduce energy consumption--and corresponding emissions--by over 40% compared to air source heat pumps and by over 70% compared to electric resistance heating with standard air-conditioning equipment. Combining geothermal with other energy-efficient measures, such as window or insulation upgrades, can increase these savings even further.</li><br />
                        <li>Geothermal  heat pumps use the Earth's energy storage capability to heat and cool buildings, and to provide hot water. The earth is a huge energy storage device that absorbs 47% of the sun's energy -- more than 500 times more energy than mankind needs every year -- in the form of clean, renewable energy. Geothermal heat pumps take this heat during the heating season at an efficiency approaching or exceeding 400%, and return it during the cooling season.</li><br />
                        <li>EPA found that, even on a source fuel basis -- accounting for ALL losses in the fuel cycle including electricity generation at power plants -- geothermal  systems are much more efficient than competing fuel technologies. They are an average of 48% more efficient than the best gas furnaces on a source fuel basis, and over 75% more efficient than oil furnaces. In fact, today's best geothermal systems outperform the best gas technology, gas heat pumps, by an average of 36% in heating mode and 43% in cooling mode!</li><br />
                        <li>Geothermal heat pumps have fewer mechanical components, making them more reliable and less prone to failure. The ground loop has an expected life of over 50 years and requires no maintenance.</li><br />
                        <li>Surveys by utilities indicate a higher level of consumer satisfaction for geothermal heat pumps than for conventional systems. Polls consistently show that more than 95% of all geothermal  heat and cooling customers would recommend geothermal to a family member or friend.</li><br />
                        <li>Geothermal heat pumps represent a savings to homeowners of 30 to 70% in the heating mode, and 20 to 50% in the cooling mode compared to conventional systems.</li><br />
                      </ul>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="messages">
                      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How does a geothermal heater/cooler work?</a>
                            </h4>
                          </div>
                          <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body">
                              Although temperatures fluctuate on the Earth’s surface throughout the course of the year, the Earth actually absorbs about 50% of heat energy from the sun, making temperatures below the surface moderate and constant the entire year. A geothermal system uses a water-based solution and loops it through your house to use these constant temperatures to both heat and cool your home.
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingTwo">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What does a system like this cost?</a>
                            </h4>
                          </div>
                          <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div className="panel-body">
                              A geothermal system costs in excess of $25,000. However, with increased savings due to the system, you can offset the original purchase price within 3-6 years. Several utility companies offer programs that include rebates and incentives for purchasing a geothermal system.
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingThree">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Will I need separate heating and cooling systems?</a>
                            </h4>
                          </div>
                          <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div className="panel-body">
                              Using the thermostat installed inside the house, the system can be used to both heat and cool your home. In cooling mode the heat pump takes heat and moves it to the underground pipes. In heating mode, the heat pump takes the warmth from the outside pipes and pumps it into your home.
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingFour">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How much space is needed to install the system?</a>
                            </h4>
                          </div>
                          <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                            <div className="panel-body">
                              Outside everything is installed underground. With two different installation designs, a geothermal system can fit into most homeowners’ properties. The inside unit is about the same size as traditional heating/cooling units.
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingFive">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How much will I save on current utility bills?</a>
                            </h4>
                          </div>
                          <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                            <div className="panel-body">
                              A geothermal system will save you anywhere from 30-70% off your monthly utility bills depending on the location, size, age and current method used for heating/cooling.
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingSix">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">How can the system be installed?</a>
                            </h4>
                          </div>
                          <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                            <div className="panel-body">
                              There are two different construction plans that can be used, depending on which one suits your property needs.<br /><br />Vertical Loop: This loop is used when the area around your land is limited. The vertical loop is installed by drilling holes to a depth of between 250-300 feet.<br /><br />Horizontal Loop: The horizontal loop is the most common construction type and is built using trenches approximately 8 feet in depth by 400 feet long.
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingSeven">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">What kind of maintenance will I have to do to keep the system running?</a>
                            </h4>
                          </div>
                          <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                            <div className="panel-body">
                              Geothermal systems are almost maintenance free. A properly installed system has at least a 20-30-year lifespan. The indoor unit lasts longer because it is away from outdoor weather conditions. Periodic filter checks and changes are the only regular maintenance necessary.
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingEight">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">What effect does a geothermal system have on the environment?</a>
                            </h4>
                          </div>
                          <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                            <div className="panel-body">
                              Geothermal systems emit no greenhouse gas and the water-solution in the pipes will not harm the surrounding area in the unlikely event of a leak. Our products use a water solution that does not harm the ozone layer or the surrounding plant life.
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingNine">
                            <h4 className="panel-title">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">I’m building my own home. Can my Geothermal system be installed during construction?</a>
                            </h4>
                          </div>
                          <div id="collapseNine" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingNine">
                            <div className="panel-body">
                              This is actually the perfect time to install a geothermal system. Upfront costs during new construction are generally less and sometimes the cost can even be included into the monthly mortgage payment. The increase in payment is offset by the immediate savings on a traditional cooling and heating system.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="settings">
                      <p><span className="bold">BTU (British Thermal Unit):</span> The amount of heat needed to raise the temperature of one pound of water one degree Fahrenheit. BTU is used to signify the heating and cooling capacity of a system and the heat losses and gains of buildings and homes.<br /><br />
                      <span className="bold">BTUH:</span> The number of BTUs produced in one hour.<br /><br />
                      <span className="bold">Closed-loop heat-pump system:</span> A heat-pump system that uses a loop of buried plastic pipe as a heat exchanger. Loops can be horizontal or vertical.<br /><br />
                      <span className="bold">COP (Coefficient of Performance):</span> The ratio of heating or cooling provided by a heat pump (or other refrigeration machine) to the energy consumed by the system under designated operating conditions. The higher the COP, the more efficient the system.<br /><br />
                      <span className="bold">Compressor:</span> The central part of a heat pump system. The compressor increases the pressure and temperature of the refrigerant and simultaneously reduces its volume while causing the refrigerant to move through the system.<br /><br />
                      <span className="bold">Condenser:</span> A heat exchanger in which hot, pressurized (gaseous) refrigerant is condensed by transferring heat to cooler surrounding air, water or earth.<br /><br />
                      <span className="bold">Cycling losses:</span> The actual efficiency of a heating or cooling system is reduced because of start-up and shut-down losses. Over sizing a heating or cooling system increases cycling losses.<br /><br />
                      <span className="bold">Desuperheater:</span> A device for recovering superheat from the compressor discharge gas of a heat pump or central air conditioner for use in heating or preheating water.<br /><br />
                      <span className="bold">Fossil fuel:</span> Any of several types of combustible fuels formed from the decomposition of organic matter. Examples are natural gas, propane, fuel oil, oil and coal.<br /><br />
                      <span className="bold">Geothermal heat pump:</span> A heat pump system that uses the earth as a heat source and heat sink.<br /><br />
                      <span className="bold">Heat exchanger:</span> A device designed to transfer heat between two physically separated fluids or mediums of different temperatures.<br /><br />
                      <span className="bold">Heat pump:</span> A mechanical device used for heating and cooling, which operates by pumping heat from a cooler to a warmer location. Heat pumps can extract heat from air, water or the earth. They are classNameified as either air-source or water-source units.<br /><br />
                      <span className="bold">Heat sink:</span> The medium—air, water or earth—which receives heat rejected from a heat pump.<br /><br />
                      <span className="bold">Heat source:</span> The medium—air, water or earth—from which heat is extracted by a heat pump.<br /><br />
                      <span className="bold">Open-loop heat-pump system:</span> A heat-pump system that uses groundwater from a well or surface water from a lake, pond or river as a heat source. The water is returned to the environment.<br /><br />
                      <span className="bold">Payback:</span> A method of calculating how long it will take to recover the difference in cost between two different heating and cooling systems by using the energy and maintenance-cost savings from the more efficient system.<br /><br />
                      <span className="bold">Supplemental heating:</span> A heating system used during extremely cold weather, when additional heat is needed to moderate indoor temperatures. May be in the form of fossil fuel or electric resistance.
                      </p>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="resources">
                      <ul className="resources">
                        <li><a href="http://www.geoexchange.org/">Geothermal Heat Pump Consortium</a></li>
                        <li><a href="http://www.energy.gov/">US Department of Energy</a></li>
                        <li><a href="http://www.epa.gov/">Environmental Protection Agency</a></li>
                        <li><a href="http://www.cpchem.com/enu/performance_pipe.asp">Driscopipe/Chevron Phillips Chemical</a></li>
                        <li><a href="http://www.igshpa.okstate.edu/">International Ground Source Heat Pump Association</a></li>
                        <li><a href="http://www.fhp-mfg.com/">Florida Heat Pump Manufacturing</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage