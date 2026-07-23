import CaseStudyPage, { caseStudyMetadata } from "@/sections/CaseStudy/CaseStudyPage";
import { DEMODA } from "@/sections/CaseStudy/constants";

export const metadata = caseStudyMetadata(DEMODA);

export default function DemodaCaseStudy() {
    return <CaseStudyPage data={DEMODA} />;
}
