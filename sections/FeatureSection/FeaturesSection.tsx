import {FEATURES_DATA} from "@/data/feature";
import {FeatureCard} from "@/components/organisms/Cards";

function FeaturesSection() {
    return (
        <div className="flex gap-4 mt-10 md:mt-24 overflow-x-auto hide-scroll-x md:grid md:grid-cols-3">
            {
                FEATURES_DATA.map(feature =>
                    <FeatureCard key={feature.id} {...feature} />
                )
            }
        </div>
    );
}

export default FeaturesSection;