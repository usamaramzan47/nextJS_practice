export const metadata = {
    title: 'Posts Page',
    description: 'Generated by usama',
}

export default function UsamaLayout({ children }) {
    return (
        <div className="bg-slate-200 rounded-md p-4 h-max space-y-3">
            <div className="wrapp bg-blue-200 p-2 rounded-md">
                <span className="bg-red-400 p-1 rounded-md">post Layout</span>
                <h1 className="text-3xl">user from layout of post </h1>
                <span>user name:test@gmail.com</span>
            </div>
            <div className="child bg-gray-400 p-4 rounded-md">
               [ {children} ]
            </div>
        </div>
    )
}
