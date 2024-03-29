/**
    Interface for project props 
 */

export interface ProjectProps {
    _id: string;
    name: string;
    description: string;
    image: string;
    repository: string;
    live_url: string;
    techTags: string[];
}

export interface TestimonialProps {
    _id: string;
    name: string;
    description: string;
    image: string;
    workplace: string;
    position: string;
}

export interface AboutProps {
    _id: string;
    description: string;
    image: string;
    active: boolean;
}
export interface TimelineProps {
    _id: string;
    year: string;
    description: string;
}
