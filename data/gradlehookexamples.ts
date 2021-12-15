export const pluginDSL = `plugins {
    id "net.dumbcode.gradlehook" version "1.2.0"
}`

export const legacyPluginApplication = `buildscript {
    repositories {
        maven {
          url "https://plugins.gradle.org/m2/"
        }
    }
}
    dependencies {
        classpath "net.dumbcode.gradlehook:GradleHook:1.2.0"
    }
}

apply plugin: "net.dumbcode.gradlehook"`

export const simplePlugin = `gradlehook {
    urlToken "http://example.com/webhook" //Keep private.
    addArtifact jar
}`

export const additionalTasks = `task sourcesJar(type: Jar, dependsOn: classes) {
    classifier = "sources"
    from sourceSets.main.allSource
}

artifacts {
    archives sourcesJar
}

gradlehook {
    urlToken "http://example.com/webhook"
    addArtifact jar
    addArtifact sourcesJar
}`

export const fields = `gradlehook {
    urlToken 'https://discordapp.com/api/webhooks/012345678912345678/foobar' //keep private
    
    addField 'payload_json', '{ "embeds": [{ "timestamp": "{{datetime}}" }] }'
    
    addArtifact jar
}`

export const messageFirstOption = `gradlehook {
    urlToken "http://example.com/webhook"
    addField 'id', 'user2201'
    addArtifact jar
    messageFirst
}`