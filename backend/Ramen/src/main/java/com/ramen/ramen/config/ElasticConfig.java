package com.ramen.ramen.config;

//import org.apache.http.HttpHost;
//import org.elasticsearch.action.index.IndexRequest;
//import org.elasticsearch.client.RestClient;
//import org.elasticsearch.client.RestHighLevelClient;
//import org.elasticsearch.common.transport.TransportAddress;
//import org.elasticsearch.transport.client.PreBuiltTransportClient;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.elasticsearch.client.Client;
//import org.elasticsearch.client.transport.TransportClient;
//import org.elasticsearch.common.settings.Settings;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.elasticsearch.client.ClientConfiguration;
//import org.springframework.data.elasticsearch.client.RestClients;
//import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration;
//import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
//import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
//import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;
//
//import java.net.InetAddress;



//@EnableElasticsearchRepositories
//@Configuration
//public class ElasticConfig {
//    @Value("${elasticsearch.host}")
//    private String EsHost;
//
//    @Value("${elasticsearch.port}")
//    private int EsPort;
//
//    @Value("${elasticsearch.cluster_name")
//    private String EsClusterName;
//
//    @Bean
//    public Client client() throws Exception{
//        Settings esSettings = Settings.settingsBuilder()
//                .put("cluster.name",EsClusterName)
//                .build();
//
//        return TransportClient.builder()
//                .settings(esSettings)
//                .build()
//                .addTransportAddress(
//                        new InetSocketTransportAddress(InetAddress.getByName(EsHost), EsPort)
//                );
//    }
//
//    @Bean
//    public ElasticsearchOperations elasticsearchTemplate() throws Exception{
//        return new ElasticsearchTemplate(client());
//    }
//}

//@Slf4j
//@Configuration
//public class ElasticConfig implements AutoCloseable {
//
//    @Value("${spring.elasticsearch.clusterName}")
//    private String clusterName;
//
//    @Value("${spring.elasticsearch.host}")
//    private String host;
//
//    @Value("${spring.elasticsearch.port}")
//    private int port;
//
//    @Value("${spring.elasticsearch.resthost}")
//    private String resthost;
//
//    @Value("${spring.elasticsearch.restport}")
//    private int restport;
//
//    RestClient restClient;
//
//    TransportClient client;
//
//    @Bean(name = "lunaElasticsearchClient")
//    public Client client() throws Exception {
//        Settings settings = Settings.builder().put("cluster.name", clusterName).build();
//
//        client = new PreBuiltTransportClient(settings);
//        client.addTransportAddress(new TransportAddress(InetAddress.getByName(host), port));
//        return client;
//    }
//
//    @Bean(name = "elasticsearchTemplate")
//    public ElasticsearchOperations elasticsearchTemplate() throws Exception {
////        log.info("elasticsearchTemplate");
//        return new ElasticsearchTemplate(client());
//    }
//
//    @Bean(name = "lunaElasticsearchRestClient")
//    public RestClient restClient() {
//        restClient = RestClient.builder(new HttpHost(resthost, restport)).build();
////        log.info("restClient");
//        return restClient;
//    }
//
//    @Override
//    public void close() throws Exception {
////		log.info("elasticClose()");
//        client.close();
//        restClient.close();
//    }
//
//}
