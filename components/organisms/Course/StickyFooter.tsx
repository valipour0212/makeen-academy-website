import {Button} from "@/components/atoms";

function StickyFooter() {
    return (
        <div
            className="w-full h-20 fixed bottom-0 left-0 right-0 z-50 bg-white border border-gray-200 rounded-t-3xl flex justify-center items-center">
            <Button variant="secondary" size="large" className="w-full mx-4">
                ثبت نام دوره
            </Button>
        </div>
    );
}

export default StickyFooter;