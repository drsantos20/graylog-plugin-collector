import React from 'react';
import createReactClass from 'create-react-class';

import CollectorsAdministration from './CollectorsAdministration';

const CollectorsAdministrationContainer = createReactClass({
  render() {
    const collectors = [
      {
        id: '723f148a-765d-4de3-9a19-cb227e7b3a0d',
        active: true,
        node_id: 'server-1.production.fra1.whatever.foobar.com',
        node_details: {
          operating_system: 'Darwin',
          ip: '192.168.1.197',
          status: {
            status: 2,
            message: 'Bad response status from Graylog server',
            backends: {
              nxlog: {
                status: 2,
                message: 'Unable to start collector after 3 tries, giving up!',
              },
              filebeat: {
                status: 1,
                message: 'This is awesome!',
              },
            },
          },
        },
        last_seen: '2018-02-20T14:43:16.146Z',
        collector_version: '0.1.5',
      },
      {
        id: 'a123f14a-765d-4de3-9a19-cb227e7b3214',
        active: true,
        node_id: 'server-2.production.fra1.whatever.foobar.com',
        node_details: {
          operating_system: 'Windows',
          ip: '192.168.1.198',
          status: {
            status: 2,
            message: 'Bad response status from Graylog server',
            backends: {
              nxlog: {
                status: 2,
                message: 'Unable to start collector after 3 tries, giving up!',
              },
            },
          },
        },
        last_seen: '2018-02-20T14:43:16.146Z',
        collector_version: '0.1.5',
      },
    ];
    const backends = [
      {
        id: '5a8c06ec58ddc805e697c7a2',
        name: 'filebeat',
        service_type: 'exec',
        node_operating_system: 'linux',
      },
      {
        id: '5a8c06ec58ddc805e697c7a3',
        name: 'winlogbeat',
        service_type: 'svc',
        node_operating_system: 'windows',
      },
      {
        id: '5a8c06ec58ddc805e697c7a4',
        name: 'nxlog',
        service_type: 'exec',
        node_operating_system: 'linux',
      },
    ];

    const collectorsByBackend = [];
    collectors.forEach((collector) => {
      const backendNames = Object.keys(collector.node_details.status.backends);
      backendNames.forEach((backend) => {
        collectorsByBackend.push({ backend: backend, collector: collector });
      });
    });

    return <CollectorsAdministration collectors={collectorsByBackend} backends={backends} />;
  },
});

export default CollectorsAdministrationContainer;