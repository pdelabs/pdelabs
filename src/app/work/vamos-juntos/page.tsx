import CaseStudyPage, { caseStudyMetadata } from "@/sections/CaseStudy/CaseStudyPage";
import { VAMOS_JUNTOS } from "@/sections/CaseStudy/constants";

export const metadata = caseStudyMetadata(VAMOS_JUNTOS);

export default function VamosJuntosCaseStudy() {
    return <CaseStudyPage data={VAMOS_JUNTOS} />;
}
