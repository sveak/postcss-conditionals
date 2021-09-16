import process from './lib/process';

module.exports = () => {
    return {
        postcssPlugin: 'postcss-conditionals',
        Once (root) {
            process(root);
        }
    }
}
module.exports.postcss = true
