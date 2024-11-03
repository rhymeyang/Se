- board
  - https://www.youtube.com/watch?v=gZ87vx7Da6A
  - https://www.youtube.com/watch?v=o4Qw0CDzO7E
  - https://www.youtube.com/watch?v=Tc1FLs-r_gw
- [Database - ignite](https://ignite.apache.org/docs/latest/installation/installing-using-docker)
- [Docker - Database](https://hub.docker.com/r/apacheignite/ignite/)
- [Apache Ignite - Youtube](https://www.youtube.com/watch?list=PLpxcSt9FGVVE_zTKTxNgyD4-UvTBFIur0)

## Setting

```shell
# Pull a specific Ignite version
sudo docker pull apacheignite/ignite:2.16.0


mkdir work_dir

chmod 644 ${PWD}/ignite-config.xml

docker run -d \
 --user root \
  -p 8080:8080 \
  -v ${PWD}/work_dir:/storage \
  -v ${PWD}/ignite-config.xml:/ignite/config/ignite-config.xml \
  -e IGNITE_WORK_DIR=/storage \
  apacheignite/ignite:2.16.0 \
  /ignite/config/ignite-config.xml


docker run -d \
  -p 8080:8080 \
  -v ${PWD}/work_dir:/storage \
  -v ${PWD}/default-config.xml:/opt/ignite/apache-ignite/config/default-config.xml \
  -e IGNITE_WORK_DIR=/storage \
  apacheignite/ignite:2.16.0



  vicky@testserver:~/ignite$ docker ps
CONTAINER ID   IMAGE                        COMMAND                  CREATED          STATUS                 PORTS                                                                                              NAMES
2159ae202f67   apacheignite/ignite:2.16.0   "/__cacert_entrypoin…"   16 seconds ago   Up 15 seconds          10800/tcp, 11211/tcp, 47100/tcp, 47500/tcp, 0.0.0.0:8080->8080/tcp, :::8080->8080/tcp, 49112/tcp   suspicious_hodgkin
                                                         vlmcsd
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 2159ae202f67
172.17.0.3

curl 'http://172.17.0.3:8080/ignite?cmd=version'
curl 'http://localhost:8080/ignite?cmd=version'
```

```shell
# clean docker

docker ps
2159ae202f67 ...
docker stop 2159ae202f67
docker rm 2159ae202f67

```

### Config

default-config.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->

<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!--
        Alter configuration below as needed.
    -->
    <!-- Ignite Configuration -->
    <bean id="grid.cfg" class="org.apache.ignite.configuration.IgniteConfiguration">

        <!-- REST Configuration -->
        <property name="connectorConfiguration">
            <bean class="org.apache.ignite.configuration.ConnectorConfiguration">
                <property name="port" value="8080"/>
                <property name="host" value="0.0.0.0"/>
	    </bean>
        </property>

    </bean>
</beans>
```

## General

- In-memory Cache
- In-memory Database
- In-memory Data Grid
- Key/Value Store
- High Performance Computing

## Cluster and Baseline Topology

- Cluster
  - Discovery Mechanism(services)
    - TCP/IP
    - Zookeeper
    - Cloud
  - Discovery Port
  - Communication Port
  - Server Node(Workhorses of the cluster)
    - do major work
    - caching data
    - running compute tasks
  - Client Node
    - interact with the ignite cluster
- Baseline Topology
  - rebalancing

## Data Model

- Physical
  - Binary Object Format
- Logical
  - has two views provided by ignite
    - Key/value view
    - SQL view
  - saved on partitions on the cluster(different nodes)
    - Affinity function(map)
      - entry ->partition->node(mapped)

## Partitioned & Replicated Cache Fundamentals

- Partitioned(data huge)
  - each node store different data
  - fast write but read are slower
  - backup
    - if configured 2, then there will be 3 copy, 3 nodes save the data
    - primary copy, backup copy
    - primary owner, secondary owner
- Replicated(small data set)
  - each node has all data
    - read fast, slow write

## Navigating Persistence Techniques and Eviction Strategies

- Native Persistence(on - enabled)
- External Storage
  - SQL database(rdbms)
  - no SQL database(Cassandra)
  - regioins
    - segments
    - pages
      - data page - entries
      - index page - indexes

---

- configure how the pages are stored and swapped
  - eviction(happens per region)
    - random lru policy(timestamp - accessed)
    - random to laru policy(last updated timestamp and usage of data page)
  - page replacement

## Hands-on

## Data Stream | Bulk Data Load

duplicat key, choose if allow overwrite(by default, it won't overwrite)

## Distributed Locks | Java Hands-On

