/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
        './node_modules/flowbite/**/*.{js,ts}',
    ],
    theme: {
        container: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px'
            }
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        fontSize: {
            ssm: '0.714rem', //10px
            sm: '0.855rem', //12px
            DEFAULT: '1rem', //14px
            md: '1.1428rem', //16px
            lg: '1.285rem', //18px
            xl: '1.428rem', //20px
            xxl: '1.571rem', //22px
            xxxl: '1.714rem', //24px
            "4xl": '2rem', //30px
        },
        extend: {
            spacing: {
                //Kích thước spacing padding margin
                ssm: '3px',
                sm: '5px',
                DEFAULT: '10px',
                md: '15px',
                lg: '20px',
                xl: '25px',
                xxl: '30px',
                //Thêm các size khác (cho icon...)
                size6: '6px',
                size8: '8px',
                size10: '10px',
                size12: '12px',
                size16: '16px',
                size18: '18px',
                size24: '24px',
                size28: '28px',
                size32: '32px',
                size34: '34px',
                size38: '38px',
                size48: '48px',
                size60: 'size60',
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                red: '#ED1B23',
                grayCustom: '#6c757d',
                grayCustom1: '#dee2e6',
                grayCustom2: '#f2f2f2',
                grayCustom3: '#ced4da',
                grayCustom4: '#e9ecef',
                grayCustom5: '#343a40',
                grayCustom6: '#4b5563'
            },
            aspectRatio: {
                '4/3': '4 / 3',
                '10/9': '10 / 9',
                '25/20': '328 / 228',
                '34/19': '340 /190',
            },
            borderColor: {
                DEFAULT: '#E8EDF1',
            },
            boxShadow: {
                DEFAULT: '0 -2px 10px 0 rgba(30, 30, 35, 0.05)',
                card: 'rgba(0, 0, 0, 0.03) 0px 4px 12px',
            },
            backgroundImage: (theme) => ({
                'gradient-primary500-to-right': `linear-gradient(to right, rgba(253, 207, 19, 0), rgba(253, 207, 19, 1))`,
            }),
            screens: {
                'lg-max': {'max': '1023px'},
            }
        },
        container: (theme) => ({
            center: true,
            padding: theme('spacing.DEFAULT'),
        }),
    },
    plugins: [
        require('flowbite/plugin'),
        // require('tailwindcss/typography'),
    ],
}
