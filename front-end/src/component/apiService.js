import { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';
//const MOCK_BASE_URL = 'http://localhost:3001';

export const useUserData = (userId) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
                setUserData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    return { userData, loading, error };
};

export const useUserActivity = (userId) => {
    const [activityData, setActivityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserActivity = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
                setActivityData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserActivity();
    }, [userId]);

    return { activityData, loading, error };
};

export const useUserAverageSessions = (userId) => {
    const [averageSessionsData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
                setUserData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    return { averageSessionsData, loading, error };
};

export const useUserPerformance = (userId) => {
    const [userPerformanceData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
                setUserData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    return { userPerformanceData, loading, error };
};