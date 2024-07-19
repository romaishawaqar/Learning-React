// src/components/Ewaste.js

const Ewaste = () => {
  const collectionPoints = [
    { sno: 1, city: 'Ahmedabad', state: 'Gujarat', address: 'Shop No D-9, Pushp Tenament, Behind Mony Hotel, Isanpur Gujarat –382443', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Sandeep', contactDetail: '9375688099', tollFree: '1800 572 7756' },
    { sno: 2, city: 'Bangalore', state: 'Karnataka', address: 'No.43 1st floor 2nd Main D.D.U.T.T.L. Yeshwantpur Karnataka -560022', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Ratan Lal', contactDetail: '9886250346', tollFree: '1800 572 7756' },
    { sno: 3, city: 'Bhubaneshwar', state: 'Orissa', address: '1st Floor Delta house Rajendra Nagar Madhupatna Cuttack, Orissa-753010', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Nihar Mahapatra', contactDetail: '9337902236', tollFree: '1800 572 7756' },
    { sno: 4, city: 'Chandigarh', state: 'Punjab', address: 'Shop No: -15 & 16, Pabhat Road, Opp – Tennis Academy, Zirakpur, Punjab-140603', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Sanjeev', contactDetail: '9316166155', tollFree: '1800 572 7756' },
    { sno: 5, city: 'Chennai', state: 'Tamil Nadu', address: '3/27 Sakthi Garden Phase II, Senneerkuppam, Poonamallee, Near Bisleri Water Plant Tamil Nadu-600056', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Firoj Khan', contactDetail: '9363166155 / 9362005006', tollFree: '1800 572 7756' },
    { sno: 6, city: 'Cochin', state: 'Kerala', address: 'Door No-84D SPW Road, Vrindavan Ln, Choornikkara, Kochi, Kerala -683106', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Manish', contactDetail: '9037991199', tollFree: '1800 572 7756' },
    { sno: 7, city: 'Gurugram', state: 'Haryana', address: 'J-171, New Palam Vihar Phase-1, Gurugram, Haryana -122017', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Rajesh', contactDetail: '9711563229', tollFree: '1800 572 7756' },
    { sno: 8, city: 'Guwahati', state: 'Assam', address: 'HN-34, Kundil Nagar Basistha Chariali, Near Parbhat Apartment Guwahati-781029', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Sishram', contactDetail: '9864048000', tollFree: '1800 572 7756' },
    { sno: 9, city: 'Hyderabad', state: 'Telangana', address: 'Shop No.-4, Block-3, 4th Shatter at 179, MPR Estates Near Old Check Post, Secunderabad Telangana-500011', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Ajay', contactDetail: '9395166155 / 9396166155', tollFree: '1800 572 7756' },
    { sno: 10, city: 'Indore', state: 'Madhya Pradesh', address: '284 AS-3 Scheme No.-78, Vijay Nagar MP-452010', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Yogesh', contactDetail: '9302734152', tollFree: '1800 572 7756' },
    { sno: 11, city: 'Jaipur', state: 'Rajasthan', address: 'Plot No.81, 200 ft. By Pass, Near Ajmer Road, Heerapura, Rajasthan – 302021', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Yogesh Saharan', contactDetail: '9309413301', tollFree: '1800 572 7756' },
    { sno: 12, city: 'JAMMU', state: 'J&K', address: 'Sidco Chouk Bari Brahmana Jammu -181133', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Dharampal', contactDetail: '9622565431', tollFree: '1800 572 7756' },
    { sno: 13, city: 'Jamshedpur', state: 'Jharkhand', address: 'A-36 Guru Nanak Nagar Near Hotel Amber Sakchi Jamshedpur Jharkhand – 831001', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Niraj', contactDetail: '9304002777', tollFree: '1800 572 7756' },
    { sno: 14, city: 'Kolkata', state: 'West Bengal', address: '156A/73, Northern Park, B.T. Road DUNLOP WB – 700108', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Vinod Kumar', contactDetail: '9331522536', tollFree: '1800 572 7756' },
    { sno: 15, city: 'Lucknow', state: 'Uttar Pradesh', address: 'S 317, Transport Nagar, Near RTO Office Lucknow UP- 226012', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Anuj Poonia', contactDetail: '9335166155 / 9305166155', tollFree: '1800 572 7756' },
    { sno: 16, city: 'Mumbai', state: 'Maharashtra', address: 'Plot No. 92, Gali No. – 01, Sector 19C Vashi Navi Mumbai – 400705', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Balwan Singh', contactDetail: '9372166155 / 9371644600', tollFree: '1800 572 7756' },
    { sno: 17, city: 'Nagpur', state: 'Maharashtra', address: 'Shop 3 Kachore Complex Amravati Road, Waddhamna Maharashtra – 440023', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Balwan Singh', contactDetail: '9860814787', tollFree: '1800 572 7756' },
    { sno: 18, city: 'New Delhi', state: 'New Delhi', address: 'Plot No. 619, Block A, Near Tata Telco Service Station, Rangpuri, Mahipalpur Delhi -110037', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Rajkumar Poonia', contactDetail: '9810053907', tollFree: '1800 572 7756' },
    { sno: 19, city: 'Noida', state: 'Uttar Pradesh', address: 'Bh – 122, Sector 70 Noida UP- 201301', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Anuj Poonia', contactDetail: '9999166155', tollFree: '1800 572 7756' },
    { sno: 20, city: 'Pune', state: 'Maharashtra', address: 'Plot No 24, Sector 4, Shikshak Colony Near Spine City, Moshi Pradhikaran Maharashtra -412105', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Balwan Singh', contactDetail: '9370939911', tollFree: '1800 572 7756' },
    { sno: 21, city: 'Raipur', state: 'Chhattisgarh', address: 'Mig No. 7, Ring Road No-2 Kabir Nagar Raipur Chhattisgarh-492001', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Bijender Singh', contactDetail: '9303906097', tollFree: '1800 572 7756' },
    { sno: 22, city: 'Vishakhapatnam', state: 'Andhra Pradesh', address: 'Shop No.5, New Gajuwaka, Opp. High School Road Andhra Pradesh -530026', partner: 'Professional Logistics Pvt. Ltd', contactPerson: 'Mr. Jugti', contactDetail: '9553088577', tollFree: '1800 572 7756' }
  ];

  return (
    <section className="bg-gray-100 p-6 m-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">E-Waste Management</h2>
      <img
        src="https://laplife.in/wp-content/uploads/2018/07/e-waste-managment2.jpg"
        alt="E-Waste"
        className="w-full rounded-lg shadow-lg mb-4"
      />
      <div>
        <p className="text-lg mb-4">
          At LAPLIFE ELECTRONICS PRIVATE LIMITED, we understand that our responsibility doesn’t end at selling you our products.
        </p>
        <p className="text-lg mb-4">
          LAPLIFE ELECTRONICS PRIVATE LIMITED has been working in the area of safe disposal of electronic waste. This thought is supported by our global policy, as well as the legislation passed by the Ministry of Environment and Forests (MoEF) (called E-waste (Management & Handling) Rules, 2016), which came into effect from 1st Oct 2016.
        </p>
        <p className="text-lg mb-4">
          LAPLIFE ELECTRONICS PRIVATE LIMITED will seek shared responsibility and cooperation from customers in reducing the environmental impact of their products. LAPLIFE ELECTRONICS PRIVATE LIMITED will comply with all the applicable laws related to e-waste management Rules 2016.
        </p>
        <p className="text-lg mb-4">
          As part of the e-waste recycling initiative, LAPLIFE ELECTRONICS PRIVATE LIMITED has empanelled K. J. Recyclers, an E-waste Recycling company authorized by Punjab Pollution Control Board, to collect, dismantle, and recycle E-waste across the country.
        </p>
        <p className="text-lg mb-4">
          For further information about e-waste recycling, and our e-waste recycling partner & their process, you may log on to <a href="http://www.kjrecyclers.com" className="text-blue-500 underline">www.kjrecyclers.com</a> or write an email to <a href="mailto:info@kjrecyclers.com" className="text-blue-500 underline">info@kjrecyclers.com</a> or call on Toll-Free: <span className="font-semibold">1800-572-7756</span>.
        </p>
        <p className="text-lg mb-4">
          How this channelization will work: If you want to hand over your old product, you can use our Toll-Free No. 1800-572-7756. Customer care representatives will explain the process of disposal and will share the nearest drop point location. If any customer wants to hand over the material from their doorsteps, we will send our recycler’s reverse logistic team to collect the items and channelize the same to our e-waste partner plant for final processing.
        </p>

        <h3 className="text-xl font-bold mb-4 text-center text-green-700">Collection Points across the Country</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="w-full bg-green-100 border-b border-gray-300">
                <th className="py-2 px-3 text-left text-green-700 font-bold text-sm">S. No.</th>
                <th className="py-2 px-3 text-left text-green-700 font-bold text-sm">City</th>
                <th className="py-2 px-3 text-left text-green-700 font-bold text-sm">State</th>
                <th className="py-2 px-3 text-left text-green-700 font-bold text-sm">Complete Address</th>
                <th className="py-2 px-3 text-left text-green-700 font-bold text-sm">Logistics Partner Name</th>
                <th className="py-2 px-3 text-left text-green-700 font-bold text-sm">Contact Person</th>
                <th className="py-2 px-3 text-left text-green-700 font-bold text-sm">Contact Detail</th>
                <th className="py-2 px-3 text-left text-green-700 font-bold text-sm">TOLL Free No.</th>
              </tr>
            </thead>
            <tbody>
              {collectionPoints.map(point => (
                <tr key={point.sno} className="border-b border-gray-200">
                  <td className="py-1 px-2 text-gray-700 text-sm">{point.sno}</td>
                  <td className="py-1 px-2 text-gray-700 text-sm">{point.city}</td>
                  <td className="py-1 px-2 text-gray-700 text-sm">{point.state}</td>
                  <td className="py-1 px-2 text-gray-700 text-sm">{point.address}</td>
                  <td className="py-1 px-2 text-gray-700 text-sm">{point.partner}</td>
                  <td className="py-1 px-2 text-gray-700 text-sm">{point.contactPerson}</td>
                  <td className="py-1 px-2 text-gray-700 text-sm">{point.contactDetail}</td>
                  <td className="py-1 px-2 text-gray-700 text-sm">{point.tollFree}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Ewaste;
