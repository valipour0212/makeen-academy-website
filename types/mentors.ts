export interface MentorsDataType {
    title: string;
    mentors: MentorInformationType[];
}

export interface MentorInformationType {
    id: string;
    image: string;
    fullName: string;
    subtitle: string;
    jobTitle: string;
    description: string;
}
