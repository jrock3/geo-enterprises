import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className='content'>
        <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1'>
                <StaticImage src="../../static/images/banks.jpg" alt="" />
              </div>
            </div>
            <div className='row' style={{ paddingTop: '4%' }}>
              <div className='col-md-10 col-md-offset-1'>
                <h1>Geothermal Tax Credits</h1>
                <h2>The Inflation Reduction Act of 2022 (IRA)</h2>
                <p>The Inflation Reduction Act of 2022 (IRA) substantially extends and enhances the federal income tax credits and incentives available for the installation of geothermal heat pump (GHP) energy property in commercial buildings, including the introduction of a new direct payment option for non-taxable entities. For taxable businesses, there are also new carryback and transfer provisions along with a continuation of the accelerated depreciation benefits. These new incentives are unfortunately more complex in structure. This guide is designed to provide a detailed review of the new tax and depreciation incentives available for commercial GHP energy property under the IRA.</p>
                <h3>Federal Income Tax Credits:</h3>
                <ul>
                  <li>Investment tax credit (ITC) up to 30% of system cost basis</li>
                  <li>Domestic content bonus tax credit up to 10% of system cost basis</li>
                  <li>Energy community bonus tax credit up to 10% of system cost basis</li>
                  <li>Direct-pay option for non-taxable entities</li>
                  <li>No cap on total credit amount</li>
                  <li>Can be used to offset AMT tax</li>
                  <li>Can be used in more than one year</li>
                  <li>Can be carried back up to 3 years or transferred/sold to an unrelated party</li>
                  <li>Can be combined with solar and other clean energy tax credits</li>
                </ul>
                <h3>Accelerated Depreciation:</h3>
                <ul>
                  <li>5-year MACRS depreciation of system cost basis (less 1⁄2 of tax credit)</li>
                  <li>Eligible for first-year bonus depreciation</li>
                </ul>
                <h3>Eligibility:</h3>
                <ul>
                  <li>Building located in U.S.</li>
                  <li>Original use begins with taxpayer</li>
                  <li>Construction commenced before 1/1/2035</li>
                </ul>
                <h2>Business Energy Investment Tax Credit</h2>
                <p>The business ITC for geothermal heat pump property was originally enacted in the Energy Improvement and Extension Act of 2008. This legislation added geothermal heat pumps to the definition of energy property under section 48(a) of the Internal Revenue Code with a 10% tax credit. This credit was extended by Bipartisan Budget Act of 2018 and most recently enhanced and further extended by the IRA of 2022. Effective 1/1/2023, there is now a 2-tier structure in place with a base credit rate of 6% and an increased rate of 30% if any one of the following criteria are met:</p>
                <ol>
                  <li>The maximum net output capacity of the GHP project is less than 1 megawatt (3.4 million Btu/h) of thermal energy. The Geothermal Exchange Organization (GEO) has submitted analysis that equates this to a total installed system capacity of 445 tons for distributed zone-level GHPs or 285 tons for central plant GHPs. The Department of Treasury is currently developing guidance.</li>
                  <li>The project is installed under specific prevailing wage and apprenticeship requirements. The IRS issued guidance for these requirements in Notice 2022-61 on 11-30-2022.</li>
                  <li>Construction of the project was commenced prior to 1-29-2023.</li>
                </ol>
                <p>The ITC for GHP energy property is effective for projects that commence construction prior to 1/1/2035. In 2033 the base rate drops to 5.2% and the increased rate to 26%, while in 2034 they decline to 4.4% and 22% respectively.</p>
                <h2>Domestic Bonus Tax Credit</h2>
                <p>The domestic content bonus requires that any steel, iron, or manufactured product that is part of the GHP project at time of completion be produced in the United States. There is a 2-tier structure in place with a base credit rate of 2% and an increased rate of 10% that is based on the same criteria as for the ITC outlined above.</p>
                <p>For purposes of this bonus, steel and iron used in the GHP project must be produced in the United States. This requirement applies to construction materials made primarily of steel or iron, but not to steel or iron used as components or sub-components of other manufactured products. Manufactured products are deemed to have been manufactured in the United States if at least 40% of the total cost of the incorporated components and subcomponents are mined, produced, or manufactured in the United States. The percentage of domestic content required for manufactured products increases to 45% for projects that begin construction in 2025, 50% for projects that begin construction in 2026, and 55% for projects that begin construction after 2026. GHP projects certainly appear to be able meet these requirements, however the Department of Treasury is developing necessary guidance.</p>
                <p>The Domestic Content Bonus is not available for GHP projects completed before 1/1/2023</p>
                <h2>Direct Pay</h2>
                <p>Non-taxable entities have historically been unable to use the ITC. To address this, the IRA creates a new direct pay mechanism that, in effect, provides a refundable credit equal to the GHP project ITC with any domestic content bonus. Entities eligible include tax exempt organizations, a State or political subdivision thereof, the Tennessee Valley Authority, Indian tribal governments, Alaska Native Corporations, and rural electric cooperatives. Examples of these entities include charities, churches, foundations, state and local government buildings, schools, universities, and other nonprofits.</p>
                <p>Direct pay is available for GHP projects that are placed in service after 12/31/2022.</p>
                <h2>Transfer or Sale of Tax Credit</h2>
                <p>Taxpayers may transfer the ITC including any domestic content bonus to an unrelated taxpayer. Consideration must be paid in cash, is not included in the income of the transferor, and is not deductible to the transferee. The transferee shall be treated as the taxpayer for all purposes with respect to the credit. For GHP energy projects held by a partnership, only the partnership can elect to transfer the eligible credits, not the individual partners. Direct pay is available for GHP projects that are placed in service after 12/31/2022.</p>
                <h2>Credit Carryback</h2>
                <p>The IRA extends the ITC carryback period to 3 years. The credit must originate in a tax year that begins after 12/31/2022. Any unused portion of the credit can also be carried forward.</p>
                <h2>Depreciation of Energy Property</h2>
                <p>Energy property is classified as a 5-year property in section 168(e) (3)(B)(vi) of the Internal Revenue Code, meaning the cost of the property can be deducted on an accelerated MACRS basis. For depreciation purposes, the system cost basis must be reduced by one half of the energy tax credit. In the example of a C-corporation in a 26% overall (federal plus state) tax bracket receiving a 40% ITC (includes the domestic content bonus), MACRS depreciation provides an additional tax savings equal to 20.8% of the energy property basis over the first 5 years, or optionally most within the first year. By comparison, conventional heating and cooling systems are generally depreciated on a 39-year straight line basis and would provide only 3.33% of the basis in tax savings over the first 5 years. The tax benefits for pass-through entities such as S-corporations could be much higher due to the higher marginal tax rates for individuals.</p>
                <p>Energy property is eligible for first year bonus depreciation. The bonus allowance is 100% in 2022, 80% in 2023, 60% in 2024, 40% in 2025, 20% in 2026 and phases out in 2027. Refer to IRS Publication 946 for more information regarding how to depreciate property.</p>
                <h2>Eligible Geothermal Heat Pump Energy Property</h2>
                <p>The tax credit may be claimed for spending on equipment which uses the ground or ground water as a thermal energy source to heat a structure or as a thermal energy sink to cool a structure. The structure must be located in the United States. Spending includes costs of installation.</p>
                <p>The credit cannot be claimed for spending on equipment used solely for a purpose other than heating or cooling a structure or on previously used equipment.</p>
                <h2>Construction Commenced Requirement</h2>
                <p>The credit can be claimed on spending for projects on which construction has commenced prior to January 1st, 2035. There is no time limit on when the construction must be completed for GHP energy projects. See IRS Notice 2018-59 for methods of establishing the commencement of construction.</p>
                <h2>System Cost Basis</h2>
                <p>The cost basis includes the direct costs associated with the purchase and installation of the energy property as well as any indirect costs that may be partly or fully allocable to its construction (including taxes). This includes equipment such as ground heat exchangers or wells, distribution piping and ductwork, pumps, GHPs and controls along with the associated installation labor and materials. The basis also generally includes those portions of the electrical, plumbing, design and GC fees that are specifically associated with the geothermal property. Utility rebates usually reduce the basis. See the uniform capitalization rules of IRS section 263A.</p>
                <h2>Dual Use Property Hybrid GHP Systems</h2>
                <p>If a GHP energy property contains a source of energy other than from the ground or ground water, portions of the system that carry both forms of energy may be considered dual use equipment. This would typically be equipment such as ductwork downstream of the GHP. The presence of an auxiliary energy source solely for emergency back-up purposes is not considered in this determination. Otherwise, if more than 25% of the annual energy (not peak energy) comes from the auxiliary source, any dual use equipment in the system may no longer be eligible for inclusion in the ITC cost basis. These comments are based on an interpretation of a 1979 code definition of energy property for direct use geothermal energy such as hot water for heating. There have been no further guidelines published by the IRS since that time. The IRS may not apply this language in this same way to GHP energy property and, as such, this interpretation is offered on a precautionary basis for those developing hybrid GHP energy projects. See 26 CFR 1.48-9 - Definition of energy property.</p>
                <h2>Energy Credit and AMT</h2>
                <p>The ITC can be used to offset both regular income taxes and alternative minimum taxes (AMT).</p>
                <h2>Ownership Considerations</h2>
                <p>Geothermal energy property ITC credits and depreciation deductions can only be claimed by the owner of the eligible property, including utilities that own energy property. At present, business models as used by the solar industry where a third-party owner (TPO) leases or sells energy from an energy property to a consumer are prohibited for GHP property due to IRS rules related to “limited use.” The issue is the non-removable geothermal loop being dedicated to a single customer, in effect making the TPO a lender rather than a true owner. GEO is working with Treasury to develop a work around.</p>
                <h2>Energy Communities</h2>
                <p>The law includes an additional bonus credit of 10% (or 2% for projects over 1MW that don’t meet prevailing wage/apprenticeship requirements) for Section 48 technologies that are installed in “energy communities.” Energy communities are defined as:</p>
                <ul>
                  <li>Census tract or adjoining tract with coal mine closed since 2000, or</li>
                  <li>Census tract or adjoining tract with coal plant closed since 2010, or</li>
                  <li>Defined as “a brownfield site” by the EPA, or</li>
                  <li>a metropolitan or non-metropolitan statistical area where 0.17% or more direct employment, or at least 25% of local tax revenues, are related to extraction, processing, transport, or storage of coal, oil, or natural gas, and unemployment is at or above the national average in the previous year</li>
                </ul>
                <h2>Claiming the Credit</h2>
                <p>IRS Form 3468 is used to claim the Energy Credit. Visit <a href="https://www.irs.gov/" target="_blank">www.irs.gov</a> to download the latest tax form and instructions.</p>
              </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Tax Credits</title>

export default AboutPage