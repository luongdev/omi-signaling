export function randomId(prefix?: string): string {
    return `${prefix || 'gen'}-${Math.random().toString(36).substr(2, 9)}`;
}