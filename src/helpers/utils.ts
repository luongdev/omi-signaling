export function randomId(prefix?: string): string {
    return `${prefix || 'gen'}-${Math.random().toString(36).substr(2, 9)}`;
}

export function topicMatchesPattern(topic: string, pattern: string): boolean {
    if (pattern === topic) return true;

    if (pattern.endsWith('#')) {
        const prefix = pattern.substring(0, pattern.length - 1);
        return topic.startsWith(prefix)
    }

    const regexPattern = pattern
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/\\\+/g, '[^/]+')
        .replace(/\\#/g, '.*');

    const regex = new RegExp(`^${regexPattern}$`);

    return regex.test(topic);
}
