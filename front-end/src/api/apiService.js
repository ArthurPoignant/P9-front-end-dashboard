/* eslint-disable eqeqeq */
import { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../models/User';
import Performance from '../models/Performance';
import AverageSessions from '../models/AverageSessions';
import Activity from '../models/Activity';

const API_BASE_URL = 'http://localhost:3000';
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true';

const fetchMockData = async (endpoint, userId) => {
  const response = await fetch(`http://localhost:3001/${endpoint}.json`);
  let listUser = await response.json();
  for (let user of listUser) {
    if (user.id == userId || user.userId == userId) {
      return user;
    }
  }
};

export const useUserData = (userId) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userData;
        if (USE_MOCK_DATA) {
          userData = await fetchMockData('user', userId);
          console.log('Mock_data');
        } else {
          const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
          userData = response.data.data;
          console.log('API_data');
        }
        setUserData(new User(userData));
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
        let userActivity;
        if (USE_MOCK_DATA) {
          userActivity = await fetchMockData('activity', userId);
        } else {
          const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
          userActivity = response.data.data;
        }
        setActivityData(new Activity(userActivity));
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
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAverageSessionsData = async () => {
      try {
        let userAverageSessions;
        if (USE_MOCK_DATA) {
          userAverageSessions = await fetchMockData('average-sessions', userId);
        } else {
          const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
          userAverageSessions = response.data.data;
        }
        setAverageSessionsData(new AverageSessions(userAverageSessions));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAverageSessionsData();
  }, [userId]);

  return { averageSessionsData, loading, error };
};

export const useUserPerformance = (userId) => {
  const [userPerformanceData, setUserPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPerformanceData = async () => {
      try {
        let userPerformance;
        if (USE_MOCK_DATA) {
          userPerformance = await fetchMockData('performance', userId);
        } else {
          const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
          userPerformance = response.data.data;
        }
        setUserPerformanceData(new Performance(userPerformance));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPerformanceData();
  }, [userId]);

  return { userPerformanceData, loading, error };
};
