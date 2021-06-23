import React, { useState } from "react";

interface AppContextType {
    store: {
        json: string;
        logCount: number;
    },
    actions: {
        printJson: (data: any) => void
    }
}

export const AppContext = React.createContext<AppContextType>(Object.create(null));

export const ContextWrapper: React.FC = ({ children }) => {

    const [state, setState] = useState<AppContextType>(
        {
            store: {
                json: '',
                logCount: 0
            },
            actions: {
                printJson: (data) => {
                    let temp = { ...state }
                    temp.store.json += "\n" + data;
                    temp.store.logCount++;
                    setState(temp)
                }
            }
        })

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );

}