import "./BasicInfo.css"
const GeneralInfo = () => {
    return (

        <>
            <form className="formContainer"  id="formContainerForGeneralInfo">

                <section className="column">
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="Name">Name</label>
                        <select className="WideInput" type="text" id="Name" name="Name"
                            placeholder="Name" >
                            <option value="Name" className="WideInput" >Name</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>

                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="PostedBy">Posted by</label>
                        <select className="WideInput" type="text" id="PostedBy" name="PostedBy"
                            placeholder="Posted By" >
                            <option value="PostedBy" className="WideInput" >Posted By</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                
                
                <section className="inputSection">
                        <label className="WideLabel" htmlFor="FeaturedPackage">FeaturedPackage</label>
                        <select className="WideInput" type="text" id="FeaturedPackage" name="FeaturedPackage"
                            placeholder="Featured Package" >
                            <option value="FeaturedPackage" className="WideInput" >Featured Package</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    </section>
                <section className="column">

                <section className="inputSection"> <label className="WideLabel" htmlFor="Mobile">Mobile</label>
                        <input className="WideInput" type="number" id="Mobile" name="Mobile"
                            placeholder="Enter Mobile no." /></section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="SaleType">SaleType</label>
                        <select className="WideInput" type="text" id="SaleType" name="SaleType"
                            placeholder="Sale Type" >
                            <option value="SaleType" className="SaleType" >Sale Type</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>

                    <section className="inputSection"><label className="WideLabel" htmlFor="PpdPackage">PPD Package</label>
                        <select className="WideInput" type="text" id="PpdPackage" name="PpdPackage"
                            placeholder="Ppd Package" >
                            <option value="PpdPackage" className="PpdPackage" >PpdPackage</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                </section>
            </form>
<section className="image"> <span className="vector"></span> </section>
            <section className="buttons" id="buttonsForGeneralInfo">
          <button className="button1">Previous</button>  
            <button className="button2">Save & Continue</button> 
            </section>
        </>
    )
}
export default GeneralInfo;