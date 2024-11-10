import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading={"check it out"}
            heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pt-12 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where Can I get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsa vel voluptatem repellat. Incidunt rem ut beatae recusandae eius id sint, obcaecati quidem, officia minus quae maxime, sapiente provident dolores?</p>
                    <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;