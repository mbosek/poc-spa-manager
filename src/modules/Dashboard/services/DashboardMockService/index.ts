import recommendations from '../../mocks/recommendations';
import agents from '../../mocks/agents';

class MockService {

    public getRecommendationsMock() {
        return recommendations;
    }

    public getAgentsMock() {
        return agents;
    }
}

export const DashboardMockService = new MockService();