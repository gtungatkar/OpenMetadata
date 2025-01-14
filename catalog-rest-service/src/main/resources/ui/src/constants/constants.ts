/*
  * Licensed to the Apache Software Foundation (ASF) under one or more
  * contributor license agreements. See the NOTICE file distributed with
  * this work for additional information regarding copyright ownership.
  * The ASF licenses this file to You under the Apache License, Version 2.0
  * (the "License"); you may not use this file except in compliance with
  * the License. You may obtain a copy of the License at

  * http://www.apache.org/licenses/LICENSE-2.0

  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

export const PAGE_SIZE = 10;
export const API_RES_MAX_SIZE = 100000;
export const LIST_SIZE = 5;
export const SIDEBAR_WIDTH_COLLAPSED = 290;
export const SIDEBAR_WIDTH_EXPANDED = 290;
export const oidcTokenKey = 'oidcIdToken';
export const imageTypes = {
  image: 's96-c',
  image192: 's192-c',
  image24: 's24-c',
  image32: 's32-c',
  image48: 's48-c',
  image512: 's512-c',
  image72: 's72-c',
};
export const ERROR404 = 'No data found';
export const ERROR500 = 'Something went wrong';
const PLACEHOLDER_ROUTE_DATASET_FQN = ':datasetFQN';
const PLACEHOLDER_ROUTE_DATABASE_FQN = ':databaseFQN';
const PLACEHOLDER_ROUTE_SERVICE_FQN = ':serviceFQN';
const PLACEHOLDER_ROUTE_SEARCHQUERY = ':searchQuery';

export const pagingObject = { after: '', before: '' };

/* eslint-disable @typescript-eslint/camelcase */
export const tiers = [
  { key: 'Tier.Tier1', doc_count: 0 },
  { key: 'Tier.Tier2', doc_count: 0 },
  { key: 'Tier.Tier3', doc_count: 0 },
  { key: 'Tier.Tier4', doc_count: 0 },
  { key: 'Tier.Tier5', doc_count: 0 },
];

export const ROUTES = {
  HOME: '/',
  CALLBACK: '/callback',
  NOT_FOUND: '/404',
  MY_DATA: '/my-data',
  REPORTS: '/reports',
  EXPLORE: '/explore',
  EXPLORE_WITH_SEARCH: `/explore/${PLACEHOLDER_ROUTE_SEARCHQUERY}`,
  WORKFLOWS: '/workflows',
  SQL_BUILDER: '/sql-builder',
  TEAMS: '/teams',
  SETTINGS: '/settings',
  STORE: '/store',
  FEEDS: '/feeds',
  DUMMY: '/dummy',
  SERVICE: `/service/${PLACEHOLDER_ROUTE_SERVICE_FQN}`,
  SERVICES: '/services',
  USERS: '/users',
  SCORECARD: '/scorecard',
  SWAGGER: '/docs',
  TAGS: '/tags',
  SIGNUP: '/signup',
  SIGNIN: '/signin',
  DATASET_DETAILS: `/dataset/${PLACEHOLDER_ROUTE_DATASET_FQN}`,
  DATABASE_DETAILS: `/database/${PLACEHOLDER_ROUTE_DATABASE_FQN}`,
  ONBOARDING: '/onboarding',
};

export const IN_PAGE_SEARCH_ROUTES: Record<string, Array<string>> = {
  '/database/': ['In this Database'],
};

export const getDatasetDetailsPath = (
  datasetFQN: string,
  columnName?: string
) => {
  let path = ROUTES.DATASET_DETAILS;
  path = path.replace(PLACEHOLDER_ROUTE_DATASET_FQN, datasetFQN);

  return `${path}${columnName ? `#${columnName}` : ''}`;
};

export const getServiceDetailsPath = (serviceFQN: string) => {
  let path = ROUTES.SERVICE;
  path = path.replace(PLACEHOLDER_ROUTE_SERVICE_FQN, serviceFQN);

  return path;
};

export const getExplorePathWithSearch = (searchQuery = '') => {
  let path = ROUTES.EXPLORE_WITH_SEARCH;
  path = path.replace(PLACEHOLDER_ROUTE_SEARCHQUERY, searchQuery);

  return path;
};

export const getDatabaseDetailsPath = (databaseFQN: string) => {
  let path = ROUTES.DATABASE_DETAILS;
  path = path.replace(PLACEHOLDER_ROUTE_DATABASE_FQN, databaseFQN);

  return path;
};

export const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export const TIMEOUT = {
  USER_LIST: 60000, // 60 seconds for user retrieval
  TOAST_DELAY: 5000, // 5 seconds timeout for toaster autohide delay
};

export const navLinkDevelop = [
  { name: 'Reports', to: '/reports', disabled: false },
  { name: 'SQL Builder', to: '/sql-builder', disabled: false },
  { name: 'Workflows', to: '/workflows', disabled: false },
];

export const navLinkSettings = [
  { name: 'Teams', to: '/teams', disabled: false },
  { name: 'Tags', to: '/tags', disabled: false },
  // { name: 'Store', to: '/store', disabled: false },
  { name: 'Services', to: '/services', disabled: false },
  // { name: 'Marketplace', to: '/marketplace', disabled: true },
  // { name: 'Preferences', to: '/preference', disabled: true },
];
