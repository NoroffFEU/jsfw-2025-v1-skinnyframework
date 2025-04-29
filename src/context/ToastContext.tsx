import {
    createContext,
    useContext,
    useState,
    ReactNode,
    FC,
} from 'react';

export type ToastType = {
    id: number;
    message: string;
    type?: 'success' | 'error' | 'info';
};

interface ToastContextType {
    toasts: ToastType[];
    addToast: (message: string, type?: ToastType['type']) => void;
    removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    const addToast = (message: string, type: ToastType['type'] = 'info') => {
        const id = new Date().getTime();
        setToasts((prev) => [...prev, { id, message, type }]);
        // Automatically remove the toast after 3 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

const ToastContainer: FC<{ toasts: ToastType[] }> = ({ toasts }) => {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 9999,
            }}
        >
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    style={{
                        background: '#333',
                        color: '#fff',
                        padding: '10px 15px',
                        margin: '5px 0',
                        borderRadius: '5px',
                        minWidth: '200px',
                    }}
                >
                    {toast.message}
                </div>
            ))}
        </div>
    );
};