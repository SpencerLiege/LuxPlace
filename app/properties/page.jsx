// import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const PropertiesPage = async () => {
    await connectDB()
    const properties = await Property.find({}).lean()
    console.log(properties)
    return ( 
        <div className="text-2xl font-bold text-center mt-20">
         Function test
         </div>
     );
}
 
export default PropertiesPage;