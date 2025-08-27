module.exports = {
    // Allow Tailwind's custom at-rules like @apply, @tailwind, @layer, etc.
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'apply',
                    'tailwind',
                    'layer',
                    'variants',
                    'responsive',
                    'screen'
                ]
            }
        ]
    }
};
