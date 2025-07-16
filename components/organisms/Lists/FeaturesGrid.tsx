import React from 'react';
import FeatureCard from "@/components/organisms/Cards/FeatureCard";
import {FEATURES_DATA} from "@/data/featuresData";

function FeaturesGrid() {

    return (
            <div className="flex gap-4 my-5 md:my-12 overflow-x-auto hide-scroll-x md:grid md: grid-cols-3 ">
                {
                    FEATURES_DATA.map(item => <FeatureCard key={item.id} {...item}/>)
                }
            </div>
    );
}

export default FeaturesGrid;