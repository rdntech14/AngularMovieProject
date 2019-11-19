import { Result } from './Result';

export interface RootObjectResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Result[];
}