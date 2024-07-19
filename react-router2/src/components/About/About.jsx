// src/components/AboutUs.js

const AboutUs = () => {
    return (
        <section className="bg-white p-6 m-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-700">About Us</h2>
            <div className="flex flex-col items-center text-center">
                {/* Text-based "Logo" with a tech theme */}
                <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center mb-4 border-4 border-black">
                    <span className="text-3xl font-extrabold text-gray-700" style={{ fontFamily: 'Courier New, Courier, monospace' }}>
                        LAPLIFE
                        <br />
                        ELECTRONICS
                    </span>
                </div>
                <p className="text-lg mb-4">
                    Welcome to <span className="font-bold text-black">LAPLIFE ELECTRONICS</span>, your trusted partner in the world of laptop spare parts. Located in New Delhi, we specialize in providing high-quality components for laptops, including batteries, adapters, housings, keyboards, speakers, cameras, and more.
                </p>
                <p className="text-lg mb-4">
                    Our mission is to ensure that you receive reliable and durable parts that enhance the performance and longevity of your laptop. We are dedicated to sourcing and supplying only the best products that meet rigorous quality standards.
                </p>
                <p className="text-lg mb-4">
                    At LAPLIFE ELECTRONICS, we pride ourselves on our commitment to customer satisfaction. Whether you are a repair professional or a laptop enthusiast, our comprehensive selection of spare parts is designed to meet your needs with precision and efficiency.
                </p>
                <p className="text-lg">
                    Thank you for choosing LAPLIFE ELECTRONICS. If you have any questions or need assistance, please feel free to reach out to our customer service team. We are here to help you keep your laptop running smoothly.
                </p>
                <p className="text-lg">
                    For any inquiries, you can contact us at: <a href="mailto:info@laplife.in" className="text-blue-500 underline">info@laplife.in</a>
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
