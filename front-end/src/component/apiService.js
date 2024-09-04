/* eslint-disable eqeqeq */
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'false';

const fetchMockData = async (endpoint, userId) => {
  const response = await fetch(`http://localhost:3001/${endpoint}.json`);
  let listUser = await response.json();
  for (let user of listUser) {
    if (user.id == userId) {
      return user
    }
    if (user.userId == userId) {
      return user
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
          userData = await fetchMockData('user', userId)
        } else {
          let response = await axios.get(`${API_BASE_URL}/user/${userId}`)
          userData = response.data.data
        }
        setUserData(normalizeData(userData));
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

const normalizeData = (data) => {
  if (data.todayScore === undefined) {
    data.todayScore = data.score;
  }
  return data
}

export const useUserActivity = (userId) => {
  const [activityData, setActivityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        let userActivity;
        if (USE_MOCK_DATA) {
          userActivity = await fetchMockData('activity', userId)
        } else {
          let response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`)
          userActivity = response.data.data
        }
        setActivityData(userActivity);
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
          userAverageSessions = await fetchMockData('average-sessions', userId)
        } else {
          let response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`)
          userAverageSessions = response.data.data
        }
        setAverageSessionsData(userAverageSessions);
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
        let UserPerformance;
        if (USE_MOCK_DATA) {
          UserPerformance = await fetchMockData('performance', userId)
        } else {
          let response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`)
          UserPerformance = response.data.data
        }
        setUserPerformanceData(UserPerformance);
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
